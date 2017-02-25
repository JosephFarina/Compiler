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
        tok = this.makeTwoCharToken(token.EQ, token.ASSIGN, '=')
        break;

      case '!':
        tok = this.makeTwoCharToken(token.NOT_EQ, token.BANG, '=')
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

      case '-':
        tok = tokenFromType(token.MINUS)
        break;

      case '/':
        tok = tokenFromType(token.SLASH)
        break

      case '*':
        tok = tokenFromType(token.ASTERISK)
        break

      case '<':
        tok = tokenFromType(token.LT)
        break

      case '>':
        tok = tokenFromType(token.GT)
        break

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
        } else if (this.isDigit(this.ch)) {
          const literal = this.readInt()
          tok = token.newToken(literal, token.INT)
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

  private peakChar(): string {
    if (this.readPosition >= this.input.length) {
      return null
    } else {
      return this.input[this.readPosition]
    }
  }

  private makeTwoCharToken(tokenIf: TokenType, tokenIfNot: TokenType, lookingFor: string): Token {
    if (this.peakChar() == lookingFor) {
      const ch = this.ch
      this.readChar()
      return token.newToken(`${ch}${this.ch}`, tokenIf)
    } else {
      return token.newToken(this.ch, tokenIfNot)
    }
  }

  private readIdentifier() {
    const position = this.position
    while (this.isLetter(this.ch)) {
      this.readChar()
    }

    return this.input.slice(position, this.position)
  }

  private readInt() {
    const position = this.position
    while (this.isDigit(this.ch)) {
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

  private isDigit(ch: string) {
    return '0' <= ch && ch <= '9'
  }
}

