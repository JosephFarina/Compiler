import * as ast from './../ast'
import * as lexer from './../lexer'
import * as token from './../token'

export class Parser {
  private lex: lexer.Lexer
  private currToken: Token
  private peekToken: Token
  private errors: string[]

  constructor(lex: lexer.Lexer) {
    this.lex = lex
    this.errors = []

    this.nextToken()
    this.nextToken()
  }

  getErrors(): string[] {
    return this.errors
  }

  peekError(t: TokenType) {
    this.errors = this.errors.concat([
      `expected next token to be ${t}, go ${this.peekToken.type} instead`
    ])
  }

  nextToken() {
    this.currToken = this.peekToken
    this.peekToken = this.lex.nextToken()
  }

  parseProgram(): ast.Program {
    const program = new ast.Program([])
    while (this.currToken.type !== token.EOF) {
      const stmt = this.parseStatement()

      if (stmt !== null) {
        program.statements = program.statements.concat([stmt])
      }

      this.nextToken()
    }

    return program
  }

  parseStatement(): Statement {
    switch (this.currToken.type) {
      case token.LET:
        return this.parseLetStatement()

      default:
        return null
    }
  }

  parseLetStatement(): ast.LetStatement {
    const stmt = new ast.LetStatement({ token: this.currToken })

    if (!this.expectPeek(token.IDENT)) {
      return null
    }

    stmt.name = new ast.Identifier({
      token: this.currToken,
      value: this.currToken.literal
    })

    if (!this.expectPeek(token.ASSIGN)) {
      return null
    }

    while (!this.currTokenIs(token.SEMICOLON)) {
      this.nextToken()
    }

    return stmt
  }

  currTokenIs(tok: TokenType): boolean {
    return this.currToken.type === tok
  }

  peekTokenIs(tok: TokenType): boolean {
    return this.peekToken.type === tok
  }

  expectPeek(tok: TokenType): boolean {
    if (this.peekTokenIs(tok)) {
      this.nextToken()
      return true
    } else {
      return false
    }
  }
}
