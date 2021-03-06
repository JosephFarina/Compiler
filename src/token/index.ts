import { curry } from 'ramda'

export const newToken = curry((literal: string, type: TokenType): Token => ({ literal, type }))

export const ILLEGAL: TokenType = 'ILLEGAL'
export const EOF: TokenType = 'EOF'

export const IDENT: TokenType = 'IDENT'
export const INT: TokenType = 'INT'

export const ASSIGN: TokenType = '='
export const PLUS: TokenType = '+'
export const MINUS: TokenType = '-'
export const SLASH: TokenType = '/'

export const BANG: TokenType = '!'
export const ASTERISK: TokenType = '*'
export const LT: TokenType = '<'
export const GT: TokenType = '>'

export const COMMA: TokenType = ','
export const SEMICOLON: TokenType = ';'

export const LPAREN: TokenType = '('
export const RPAREN: TokenType = ')'
export const LBRACE: TokenType = '{'
export const RBRACE: TokenType = '}'

export const FUNCTION: TokenType = 'FUNCTION'
export const LET: TokenType = 'LET'
export const TRUE: TokenType = 'TRUE'
export const FALSE: TokenType = 'FALSE'
export const IF: TokenType = 'IF'
export const ELSE: TokenType = 'ELSE'
export const RETURN: TokenType = 'RETURN'
export const EQ: TokenType = '=='
export const NOT_EQ: TokenType = '!='

const identKeywords: { [id: string]: TokenType } = {
  fn: FUNCTION,
  let: LET,
  true: TRUE,
  false: FALSE,
  if: IF,
  else: ELSE,
  return: RETURN
}

export function lookupIdent(literal: string): TokenType {
  return identKeywords[literal] ? identKeywords[literal] : IDENT
}
