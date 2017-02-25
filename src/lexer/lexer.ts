import { curry } from 'ramda'
import * as token from './../token/token'

export class Lexer {
  input: string = ''
  position: number = 0
  readPosition: number = 0
  ch: string = ''

  constructor(input: string) {
    this.input = input
    this.readChar()
  }

  public nextToken(): Token {
    this.eatWhiteSpace()

    const tokenFromType = token.newToken(this.ch)
    let tok: Token

    switch (this.ch) {
      case '=':
        tok = tokenFromType(token.ASSIGN)
        break;

      case ';':
        tok = tokenFromType(token.SEMICOLON)
        break;

      case '(':
        tok = tokenFromType(token.LPAREN)
        break;

      case ')':
        tok = tokenFromType(token.RPAREN)
        break;

      case ',':
        tok = tokenFromType(token.COMMA)
        break;

      case '+':
        tok = tokenFromType(token.PLUS)
        break;

      case '{':
        tok = tokenFromType(token.LBRACE)
        break;

      case '}':
        tok = tokenFromType(token.RBRACE)
        break;

      case null:
        tok = token.newToken('', token.EOF)
        break;

      default:
        if (this.isLetter(this.ch)) {
          const literal = this.readIdentifier()
          const ident = token.lookupIdent(literal)
          tok = token.newToken(literal, ident)
          return tok
        } else {
          tok = tokenFromType(token.ILLEGAL)
        }
    }

    this.readChar()
    return tok
  }

  private readChar() {
    if (this.readPosition >= this.input.length) {
      this.ch = null
    } else {
      this.ch = this.input[this.readPosition]
    }

    this.position = this.readPosition
    this.readPosition++
  }

  private readIdentifier() {
    const position = this.position
    while (this.isLetter(this.ch)) {
      this.readChar()
    }

    return this.input.slice(position, this.position)
  }

  private eatWhiteSpace() {
    while (/( |\n|\t|\r)/.test(this.ch)) {
      this.readChar()
    }
  }

  private isLetter(ch: string) {
    return (
      ('a' <= ch && ch <= 'z') ||
      ('A' <= ch && ch <= 'Z') ||
      ch === '_' || ch === '-'
    )
  }
}

