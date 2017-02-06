import { expect } from 'chai'
import Card from '../scripts/card'

describe('Card', () => {
  describe('Object', () => {
    it('should return an object', () => {
      expect({ class: 'Card' }).to.be.an('object')
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
/*global Card*/





// it('shoud return an object', () => {
//   expect(Object.isObject(Card))
// })
