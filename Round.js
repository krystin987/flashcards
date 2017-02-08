var readline = require('readline'),
    async = require('async');


var DeckMod = require('./Deck.js');

function Round(arg) {
	if (arg instanceof DeckMod.Deck) this.cards = arg;
	else if (typeof arg == 'string') this.cards = DeckMod.from_file(arg);
	else this.cards = new DeckMod.Deck(arg);

	this.cards.reorder(); // Do a rough shuffle
	this.score = 0;
}
Round.prototype.get_score_pct = function() {
	return this.score/this.cards.count();
}

function play(arg, interface_params={ input: process.stdin, output: process.stdout }, print=console.log) {
	var r = new Round(arg);

	var cli = readline.createInterface(interface_params);
	cli.on('SIGINT', ()=>{ cli.close(); }); // Leave brusquely when Ctrl-C is caught

	var ncards = r.cards.count(), // What the boss uses instead of r.cards.length
	    ni = 0;
	print(`Welcome! You're playing with ${ncards} cards`);
	print(`-------------------------------------------------`);
	// cli.question is an asyncronous call
	async.mapSeries(r.cards // the thing we loop over
		// The callback-enabled function for scoring. Note how important scope is here
		, (card, when_done)=>{
			ni++; // I think this is the proper place to increment for one-based indexing
			print(`This is card number ${ni} out of ${ncards}`);
			cli.question(`Question: ${card.question} `
				, (answer)=>{
					if (card.guess(answer.trim())) {
						print("Correct!");
						r.score++;
					}
					else print("Incorrect.");
					when_done(null);
				  }
			);
		  }
		// The callback-enabled function at the end. This is called way, way after javascript thinks we called play()
		, (error_if_there_is_one, final_state_of_list)=>{
			if (error_if_there_is_one) {
				console.log(error_if_there_is_one);
				return;
			}
			print('****** Game over! ******');
			print(r.get_score_pct(), r); // TODO: make this look like what the boss wants
			cli.close();
		  }
		);
}

play('cards.jsob');
