import * as chai from 'chai'
const expect = chai.expect

import * as token from './../token/token'
import { Lexer } from './../lexer/lexer'

describe('lexer', function () {
  const input = ` 
  let five = 5;
  let ten = 10;

  let add = fn(x, y) {
    x + y;
  }
  `

  const tests: [TokenType, string][] = [
    [token.LET, 'let'],
    [token.IDENT, 'five'],
    [token.ASSIGN, '='],
    [token.INT, '5'],
    [token.SEMICOLON, ';'],

    [token.LET, 'let'],
    [token.IDENT, 'ten'],
    [token.ASSIGN, '='],
    [token.INT, '10'],
    [token.SEMICOLON, ';'],

    [token.LET, 'let'],
    [token.IDENT, 'add'],
    [token.ASSIGN, '='],
    [token.FUNCTION, 'fn'],
    [token.LPAREN, '('],
    [token.IDENT, 'x'],
    [token.COMMA, ','],
    [token.IDENT, 'y'],
    [token.RPAREN, ')'],
    [token.LBRACE, '{'],

    [token.IDENT, 'x'],
    [token.PLUS, '+'],
    [token.IDENT, 'y'],
    [token.SEMICOLON, ';'],
    [token.RBRACE, '}'],

    [token.EOF, ''],
    // [token.PLUS, '+'],
    // [token.LPAREN, '('],
    // [token.RPAREN, ')'],
    // [token.LBRACE, '{'],
    // [token.RBRACE, '}'],
    // [token.COMMA, ','],
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

