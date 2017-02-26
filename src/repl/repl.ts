const repl = require('repl')

import { Lexer } from './../lexer'
import * as token from './../token'

const server = repl.start({
  prompt: '>> ',
  eval: (input, _, __, cb) => {
    const l = new Lexer(input)
    const toks: Token[] = []
    let output = ''
    let lastToken: Token = { type: null, literal: null }

    while (lastToken.type !== token.EOF) {
      lastToken = l.nextToken()
      output += JSON.stringify(lastToken) + '\n'
    }

    cb(output)
  }
})
