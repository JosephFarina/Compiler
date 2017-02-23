export class Token {
  type: TokenType
  literal: string

  constructor(type: TokenType, ch: string) {
    this.type = type
    this.literal = ch
  }
}


export const ILLEGAL: TokenType = 'ILLEGAL'
export const EOF: TokenType = 'EOF'

export const IDENT: TokenType = 'IDENT'
export const INT: TokenType = 'INT'

export const ASSIGN: TokenType = '='
export const PLUS: TokenType = '+'

export const COMMA: TokenType = ','
export const SEMICOLON: TokenType = ';'

export const LPAREN: TokenType = '('
export const RPAREN: TokenType = ')'
export const LBRACE: TokenType = '{'
export const RBRACE: TokenType = '}'

export const FUNCTION = 'FUNCTION'
export const LET = 'LET'

export declare type TokenType =
  'ILLEGAL' |
  'EOF' |
  'IDENT' |
  'INT' |
  '=' |
  '+' |
  ',' |
  ';' |
  '(' |
  ')' |
  '{' |
  '}' |
  'FUNCTION' |
  'LET'
