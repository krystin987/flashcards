import fs from 'fs'
import Card from '../scripts/card'

class Deck {
  constructor(cards) {
    this.cards = cards
  }
  count() {
    return this.cards.length
  }
}

function fromFile(filename) {
  const lines = (fs.readFileSync(`${filename}`)+'').split("\n")
  let cards = []
  for (let line of lines) {
    if(line.length)
    cards.push(new Card(...line.split(',')))
  }
  return new Deck(cards)
}


export { Deck, fromFile}


// d = Deck();
// var content = fs.readFileSync(filename)+'';
// for (var [q, a] of eval(content)) d.push(new CardMod.Card(q, a));
// return d;
