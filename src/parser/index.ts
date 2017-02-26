import * as ast from './../ast'
import * as lexer from './../lexer'
import * as token from './../token'

export class Parser {
  private lex: lexer.Lexer
  private currToken: Token
  private peekToken: Token

  constructor(lex: lexer.Lexer) {
    this.lex = lex

    this.nextToken()
    this.nextToken()
  }

  nextToken() {
    this.currToken = this.peekToken
    this.peekToken = this.lex.nextToken()
  }

  parseProgram(): ast.Program {
    return null
  }
}
