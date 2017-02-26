interface INode {
  tokenLiteral: () => string
}

interface Statement extends INode {
  statementNode: () => any
}

interface Expression extends INode {
  expressionNode: () => any
}

