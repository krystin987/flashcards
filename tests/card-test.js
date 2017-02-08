import { expect, assert } from 'chai'
import Card from '../scripts/card'

describe('Card', () => {
  describe('Object', () => {

    it('should return an object', () => {
      assert.isFunction(Card)
    })

    it('should have a question', () => {
      let card = new Card({question: 'What is the capital of Alaska?'})
      expect(card.question).to.deep.equal('What is the capital of Alaska?')
    })

    it('should have an answer for the question', () => {
      let card = new Card({answer: 'Juneau'})
      expect(card.answer).to.deep.equal('Juneau')
    })
  })
})





/*global it*/
/*global describe*/
