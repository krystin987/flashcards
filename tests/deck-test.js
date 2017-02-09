import { assert, expect } from 'chai'
import {Deck, fromFile} from '../scripts/deck'
import Card from '../scripts/card'


describe('Deck', () => {
  let card1 = new Card('What is the capital of Alaska?', 'Juneau')
  let card2 = new Card('The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?', 'Mars')
  let card3 = new Card('Describe in words the exact direction that is 697.5° clockwise from due north?', 'North north west')
  let deck = new Deck([card1, card2, card3])

  it('should be an instance of Deck', () => {
    let deck = new Deck()
    expect(deck).to.be.an.instanceOf(Deck)
  })

  it('should hold cards 1, 2, & 3', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  })

  it('should have a count function', () => {
    assert.isFunction(deck.count)
  })

  it('should have a correct count', () => {
    expect(deck.count()).to.equal(3)
  })
})

describe('From File', () => {
  const filename = 'cards.txt'
  let deckFromFile = fromFile(filename)

  it('should have four cards', () => {
    expect(deckFromFile.cards.length).to.equal(4)

  })

})








/*global it*/
/*global describe*/
