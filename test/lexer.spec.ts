import * as chai from 'chai'
const expect = chai.expect

import * as token from './../token/token'
import { Lexer } from './../lexer/lexer'

describe('lexer', function () {
  const input = '=+(){},;'
  const tests: [
    token.TokenType, string
  ][] = [
      [token.ASSIGN, '='],
      [token.PLUS, '+'],
      [token.LPAREN, '('],
      [token.RPAREN, ')'],
      [token.LBRACE, '{'],
      [token.RBRACE, '}'],
      [token.COMMA, ','],
      [token.SEMICOLON, ';'],
      [token.EOF, '']
    ]

  const l = new Lexer(input)

  tests.forEach((test, i) => {
    const tok = l.nextToken()
    const [expectedType, expectedLiteral] = test

    it('should be the expected TokenType', () => {
      expect(tok.type).to.equal(expectedType)
    })

    it('should be the expected literal', () => {
      expect(tok.literal).to.equal(expectedLiteral)
    })
  })
})

