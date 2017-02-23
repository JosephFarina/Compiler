"use strict";
var chai = require("chai");
var expect = chai.expect;
var token = require("./../token/token");
var lexer_1 = require("./../lexer/lexer");
describe('lexer', function () {
    var input = '=+(){},;';
    var tests = [
        [token.ASSIGN, '='],
        [token.PLUS, '+'],
        [token.LPAREN, '('],
        [token.RPAREN, ')'],
        [token.LBRACE, '{'],
        [token.RBRACE, '}'],
        [token.COMMA, ','],
        [token.SEMICOLON, ';'],
        [token.EOF, '']
    ];
    var l = new lexer_1.Lexer(input);
    tests.forEach(function (test, i) {
        var tok = l.nextToken();
        var expectedType = test[0], expectedLiteral = test[1];
        it('should be the expected TokenType', function () {
            expect(tok.type).to.equal(expectedType);
        });
        it('should be the expected literal', function () {
            expect(tok.literal).to.equal(expectedLiteral);
        });
    });
});
//# sourceMappingURL=lexer.spec.js.map