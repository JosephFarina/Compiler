"use strict";
var token = require("./../token/token");
var Lexer = (function () {
    function Lexer(input) {
        this.input = '';
        this.position = 0;
        this.readPosition = 0;
        this.ch = '';
        this.input = input;
        this.readChar();
    }
    Lexer.prototype.nextToken = function () {
        var _this = this;
        var newToken = function (t) { return new token.Token(t, _this.ch); };
        var tok;
        console.log(this.ch);
        switch (this.ch) {
            case '=':
                tok = newToken(token.ASSIGN);
                break;
            case ';':
                tok = newToken(token.SEMICOLON);
                break;
            case '(':
                tok = newToken(token.LPAREN);
                break;
            case ')':
                tok = newToken(token.RPAREN);
                break;
            case ',':
                tok = newToken(token.COMMA);
                break;
            case '+':
                tok = newToken(token.PLUS);
                break;
            case '{':
                tok = newToken(token.LBRACE);
                break;
            case '}':
                tok = newToken(token.RBRACE);
                break;
            case null:
                tok = new token.Token(token.EOF, '');
                break;
        }
        this.readChar();
        return tok;
    };
    Lexer.prototype.readChar = function () {
        if (this.readPosition >= this.input.length) {
            this.ch = null;
        }
        else {
            this.ch = this.input[this.readPosition];
        }
        this.position = this.readPosition;
        this.readPosition++;
    };
    return Lexer;
}());
exports.Lexer = Lexer;
//# sourceMappingURL=lexer.js.map