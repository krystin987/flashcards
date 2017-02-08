var fs = require('fs');

var CardMod = require('./Card.js');

Deck = Array;
// Someone said this is important:
Deck.prototype.count = function () { return this.length };
// See my implementation of .hash() in Card.js
Deck.prototype.reorder = function () {
	this.sort((c) => c.hash());
}

function from_file(filename) {
	d = Deck();
	var content = fs.readFileSync(filename)+'';
	for (var [q, a] of eval(content)) d.push(new CardMod.Card(q, a));
	return d;
}

module.exports = { Deck: Deck, from_file: from_file };

/*
 * Testing:
d = from_file('cards.jsob');
d.reorder();
print = console.log
print(d)
*/
