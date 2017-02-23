import { curry } from 'ramda'
import * as token from './../token/token'

export class Lexer {
  input: string= ''
  position: number = 0
  readPosition: number = 0
  ch: string = ''

  constructor(input: string) {
    this.input = input
    this.readChar()
  }

  public nextToken(): token.Token {
    const newToken = (t: token.TokenType) => new token.Token(t, this.ch)
    let tok: token.Token

    console.log(this.ch)
    switch (this.ch) {
      case '=':
        tok = newToken(token.ASSIGN)
        break;

      case ';':
        tok = newToken(token.SEMICOLON)
        break;

      case '(':
        tok = newToken(token.LPAREN)
        break;

      case ')':
        tok = newToken(token.RPAREN)
        break;

      case ',':
        tok = newToken(token.COMMA)
        break;

      case '+':
        tok = newToken(token.PLUS)
        break;

      case '{':
        tok = newToken(token.LBRACE)
        break;

      case '}':
        tok = newToken(token.RBRACE)
        break;

      case null:
        tok = new token.Token(token.EOF, '')
        break;
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
}

