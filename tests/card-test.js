import { expect } from 'chai'
import Card from '../scripts/card'

describe('Card', () => {
  describe('Object', () => {
    it('should return an object', () => {
      expect({ class: 'Card' }).to.be.an('object')
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



// card = new Card ("What is the capital of Alaska?", "Juneau")
// card.question
// => "What is the capital of Alaska?"
// card.answer
// => "Juneau"


/*global it*/
/*global describe*/






// it('shoud return an object', () => {
//   expect(Object.isObject(Card))
// })
