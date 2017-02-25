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
  '==' |
  '!=' |
  'FUNCTION'  |
  'LET'       |
  'FALSE'     |
  'TRUE'      |
  'IF'        |
  'ELSE'      |
  'RETURN'

interface Token {
  type: TokenType
  literal: string
}
