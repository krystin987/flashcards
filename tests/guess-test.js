import { expect, assert } from 'chai'
import Card from '../scripts/card'
import Guess from '../scripts/guess'

describe('Guess', () => {

  let card = new Card ('What is the capital of Alaska?', 'Juneau')
  let guess = new Guess('Juneau', card)

  it('should be an instance of Guess', () => {
    expect(guess).to.be.an.instanceOf(Guess)
  })

    it('should have property: response', () => {
      expect(guess).to.have.property('response')
    })

    it('should be able to provide a response from the game player',   () => {
      expect(guess.response).to.equal('Juneau')
    })

    it('should be able to provide correct', ()=>{
      expect(guess.correct).to.be.ok
    })

    it('should provide feedback()', ()=>{
      expect(guess.feedback()).to.deep.equal('Correct!')
    })

    // End of Iteration II spec A
describe('Guess', () => {
    // Begin Iteration II spec B

    let card = new Card("Which planet is closest to the sun?", "Mercury")
    let guess = new Guess("Saturn", card)

    it('should receive Saturn as a user response', () => {
      expect(guess.response).to.equal('Saturn')
    })

    it('should return correct when the response matches the answer', () => {
      expect(!guess.correct);
  })
    it('should provide a valid feedback() based on user response', ()=> {
      expect(guess.feedback()).to.deep.equal('Incorrect.')
    })
  })

})


/*global it*/
/*global describe*/
