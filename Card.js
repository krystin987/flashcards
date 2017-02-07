
/*
 * We're building a class with an always-readable question, and an
 * answer that's never readable, but can be queried via member
 * functions.
 */

function Card(question, answer) {
	// this.question is a 'public' member of Card
	this.question = question;
	// answer is a 'private' member of Card
	// this.guess is a 'protected' member of Card
	this.guess = function(arg) {
		if (arg instanceof Array) {
			// Using recursion:
			for (var g of arg) if (this.guess(g)) return true;
		} else {
			text = String(arg);
			// Notice how I use answer and not .answer
			return (text.match(answer) != null);
		}
	}
}
// This is a public function
Card.prototype.hash = function(seed = new Date().getMilliseconds()) {
	var h = seed;
	for (i = 0; i < this.question.length; i++) h = ((h<<5)-h)+this.question.charCodeAt(i);
	return h&h; // convert to 32-bit integer
}

module.exports = { Card: Card };
