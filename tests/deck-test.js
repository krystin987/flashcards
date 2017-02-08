import { expect, assert } from 'chai'
import Deck from '../scripts/deck'
import Card from '../scripts/card'

describe('Deck', () => {
  describe('Object', () => {

    it('should return an object', () => {
      assert.isFunction(Deck)
    })

    it('should take in an array', () => {
      let deck = new Deck ([])
      assert.isArray(deck.cardDeck)
    })



  })
})
