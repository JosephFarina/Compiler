"use strict";
var Token = (function () {
    function Token(type, ch) {
        this.type = type;
        this.literal = ch;
    }
    return Token;
}());
exports.Token = Token;
exports.ILLEGAL = 'ILLEGAL';
exports.EOF = 'EOF';
exports.IDENT = 'IDENT';
exports.INT = 'INT';
exports.ASSIGN = '=';
exports.PLUS = '+';
exports.COMMA = ',';
exports.SEMICOLON = ';';
exports.LPAREN = '(';
exports.RPAREN = ')';
exports.LBRACE = '{';
exports.RBRACE = '}';
exports.FUNCTION = 'FUNCTION';
exports.LET = 'LET';
//# sourceMappingURL=token.js.map