import { assert, expect } from 'chai'
import Deck from '../scripts/deck'
import Card from '../scripts/card'
import Round from '../scripts/round'
import Guess from '../scripts/guess'

describe('Round', () => {
  let card1 = new Card('What is the capital of Alaska?', 'Juneau')
  let card2 = new Card("Approximately how many miles are in one astronomical unit?", "93,000,000")
  let deck  = new Deck([card1, card2])
  let round = new Round(deck)

  it('should push cards into an array', () => {
    assert.isArray(round.deck.cards)
  })

  it('guesses should begin as an empty array', () => {
    expect(round.guesses).to.have.lengthOf(0)
  })

  it('should have an object for the currentCard', () => {
    expect(round.currentCard()).to.equal(card1)
  })

  it('should record guesses', () => {
    expect(round.recordGuess('Juneau')).to.deep.equal(new Guess('Juneau', card1 ))
  })

    it('should be able to return the length of the guesses array', () => {
      expect(round.guesses.length).to.equal(1)
    })

    it('should provide feedback for the given position', () => {
      expect(round.guesses[0].feedback()).to.deep.equal('Correct!')
    })

    it('should record the number of correct responses', () => {

      expect(round.numberCorrect()).to.equal(1)
    })

    it('should have an object for the currentCard', () => {
      expect(round.currentCard()).to.deep.equal(card2)
    })

    it('should record an incorrect guess', () => {
      expect(round.recordGuess('2')).to.deep.equal(new Guess('2', card2))
    })

    it('should keep an accurate count of guesses', () => {
      expect(round.guesses.length).to.equal(2)
    })

    it('should give accurate feedback for the position', () => {
      expect(round.guesses[1].feedback()).to.deep.equal('Incorrect.')
    })

    it('should keep accurate count of the number correct', () => {
      expect(round.numberCorrect()).to.equal(1)
    })

    it('should keep track of the percent of correct', () => {
      expect(round.percentCorrect()).to.equal(50)
    })
})
