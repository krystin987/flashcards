import { expect, assert } from 'chai'
import Card from '../scripts/card'
import Guess from '../scripts/guess'

describe('Guess', () => {
  describe('Object', () => {

    it('should return a function', () => {
      assert.isFunction(Guess)
    })

    it('should have property: card', () => {
      let card = new Card ('What is the capital of Alaska?', 'Juneau')
      assert.property({ card }, 'card')
    })

    it('should have property: response', () => {
      let feedback = new Card ('What is the capital of Alaska?', 'Juneau')
      assert.property({ feedback }, 'feedback')
    })

    it('should have property: response', () => {
      let response = new Card ('What is the capital of Alaska?', 'Juneau')
      assert.property({ response }, 'response')
    })

    it('should check the user response', () => {
      let card = new Card ('What is the capital of Alaska?', 'Juneau')
      let guess = new Guess({response: card.answer})
      expect(guess.response).to.deep.equal(card.answer)
    })

    it('should be incorrect when the response and answer do not match', () => {
      let card = new Card ('Which planet is closest to the sun?', 'Mercury')
      let guess = new Guess({response: Guess.response})
      expect(guess.response).to.not.equal(card.answer)
    })
  })
})




/*global it*/
/*global describe*/
