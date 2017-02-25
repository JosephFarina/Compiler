const repl = require('repl')

import { Lexer } from './../lexer/lexer'
import * as token from './../token/token'

const server = repl.start({
  prompt: '>> ',
  eval: (input, b, c, cb) => {
    const l = new Lexer(input)
    const toks: Token[] = []

    while (toks.length === 0 || toks[toks.length - 1].type !== token.EOF) {
      toks.push(l.nextToken())
    }

    let string = ''

    toks.forEach(tok => string += JSON.stringify(tok) + '\n')

    cb(string)
  },

})
