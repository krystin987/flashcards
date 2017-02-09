import { expect } from 'chai'
import Card from '../scripts/card'

describe('Card', () => {
  let card = new Card('What is the capital of Alaska?', 'Juneau')

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceOf(Card)
  })

  it('should have a question', () => {
    expect(card.question).to.deep.equal('What is the capital of Alaska?')
  })

  it('should have an answer for the question', () => {
    expect(card.answer).to.deep.equal('Juneau')
  })

})





/*global it*/
/*global describe*/
