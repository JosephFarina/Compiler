import * as chai from 'chai'
const expect = chai.expect

import * as lexer from './../lexer'
import * as ast from './../ast'
import * as parser from './../parser'

describe('Parser', () => {
  const input = `
  let x = 5;
  let y = 10;
  let foobar = 838383;
  `

  const expectedIdentifiers = [
    'x',
    'y',
    'foobar'
  ]

  const l = new lexer.Lexer(input)
  const p = new parser.Parser(l)
  const program = p.parseProgram()


  it('parseProgram should not return null', () => {
    expect(program).not.to.equal(null)
  })

  it('program.Statements should equal 3', () => {
    expect(program.statements.length).to.equal(3)
  })

  expectedIdentifiers.forEach((expIdent, i) => {
    const stmt = program.statements[i]
    expect(testLetStatement(stmt, expIdent)).to.equal(true)
  })
})

function testLetStatement(s: Statement, name: string) {
  it('tokenLiteral should be "let"', () => {
    expect(s.tokenLiteral()).to.equal('let')
  })

  it('should be an instance ast.LetStatement', () => {
    expect(s instanceof ast.LetStatement).to.equal(true)
  })

  if (s instanceof ast.LetStatement) {
    it('s.name.value should be correct', () => {
      expect(s.name.value).to.equal(name)
    })

    it('s.name should be correct', () => {
      expect(s.name.tokenLiteral()).to.equal(name)
    })
  }
}
