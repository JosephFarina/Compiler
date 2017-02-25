declare type TokenType =
  'ILLEGAL' |
  'EOF' |
  'IDENT' |
  'INT' |
  '=' |
  '+' |
  '-' |
  '/' |
  '!' |
  '*' |
  '<' |
  '>' |
  ',' |
  ';' |
  '(' |
  ')' |
  '{' |
  '}' |
  'FUNCTION' |
  'LET'

interface Token {
  type: TokenType
  literal: string
}
