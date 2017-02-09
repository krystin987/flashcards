class Deck {
  constructor(cards) {
    this.cards = cards
  }
  count() {
    return this.cards.length
  }
}


export default Deck

// Deck = Array
// Deck.prototype.constructor = function(...args) {
//   if (args.length == 1) this = args[0]
//   else this = args
// }
//
// Deck.prototype.count = function() {
//   return this.length;
// }
