// import Card from 'card'
import Guess from '../scripts/guess'

class Round {
  constructor(deck) {
    this.deck = deck
    this.guesses = []
  }
  currentCard() {
    return this.deck.cards[0];
  }

  recordGuess(text) {
    let g = new Guess(text, this.currentCard())
    this.guesses.push(g)
    this.deck.cards.shift()
    return g

  }

  numberCorrect(){
    let r = 0
    for (let g of this.guesses)
    if (g.correct) r++
    return r
  }

  percentCorrect() {
    return this.numberCorrect()/this.guesses.length*(100)
  }

}

export default Round
