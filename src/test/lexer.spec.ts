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

  let result = add(five, ten);

  !-/*5
  5 < 10 > 5;
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

    [token.LET, 'let'],
    [token.IDENT, 'result'],
    [token.ASSIGN, '='],
    [token.IDENT, 'add'],
    [token.LPAREN, '('],
    [token.IDENT, 'five'],
    [token.COMMA, ','],
    [token.IDENT, 'ten'],
    [token.RPAREN, ')'],
    [token.SEMICOLON, ';'],

    [token.BANG, '!'],
    [token.MINUS, '-'],
    [token.SLASH, '/'],
    [token.ASTERISK, '*'],
    [token.INT, '5'],
    [token.INT, '5'],
    [token.LT, '<'],
    [token.INT, '10'],
    [token.GT, '>'],
    [token.INT, '5'],
    [token.SEMICOLON, ';'],

    [token.EOF, ''],
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

