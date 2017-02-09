class Guess {
  constructor(response, card) {
    this.response = response
    this.correct = (card.answer == response)
  }

  feedback() {
    return this.correct ? 'Correct!' : 'Incorrect.'
  }
  
}

export default Guess
