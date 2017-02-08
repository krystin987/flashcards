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

  })
})
