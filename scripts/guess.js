import Card from '../scripts/card'

class Guess {
  constructor({card, response, feedback}) {
    this.card = card
    this.response = response || 'Saturn'
    this.feedback = feedback
  }

  correct () {
    this.response === this.card.answer ? true : false
  }
  feedback () {
    
  }
}


export default Guess

// card = new Card ("What is the capital of Alaska?", "Juneau")
// guess = new Guess("Juneau", card)
// guess.card
// => Card { answer: "Juneau", question:"What is the capital of Alaska?"}
// guess.response
// => "Juneau"
// guess.correct
// => true
// guess.feedback()
// => "Correct!"
// card = new Card("Which planet is closest to the sun?", "Mercury")
// guess = new Guess("Saturn", card)
// guess.card
// => # Card {answer: "Mercury", question: "Which planet is closest to the sun?"}
// guess.response
// => "Saturn"
// guess.correct
// => false
// guess.feedback()
// => "Incorrect."
