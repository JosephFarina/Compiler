export class Program implements INode {
  statements: Statement[]

  constructor(statements: Statement[]) {
    this.statements = statements
  }

  tokenLiteral(): string {
    if (this.statements.length > 0) {
      return this.statements[0].tokenLiteral()
    } else {
      return ''
    }
  }
}

export class LetStatement implements Statement {
  token: Token
  name: Identifier
  value: Expression

  statementNode() {
    return
  }

  tokenLiteral() {
    return this.token.literal
  }
}

export class Identifier implements Expression {
  token: Token
  value: string

  expressionNode() {
    return
  }

  tokenLiteral() {
    return this.token.literal
  }
}
