import { Game, Player, Card } from 'kyu-core';

export class App {
	
	constructor() { 
		this.currentView = 'game';
		window.player1 = this.player1 = Player.new('Player 1');
		this.player2 = Player.new('Player 2');
		this.newGame(); // this.currentView = 'start'; 
	}

	newGame() {
		var game = Game.new(),
			p1 = this.player1,
			p2 = this.player2;
		for (var i = 0; i < 5; i++) {
			p1.cards.push(Card.random());
			p2.cards.push(Card.random());
		}
		game.add(p1, p1.cards.slice());
		game.add(p2, p2.cards.slice());
		game.start();
		this.game = game;
	}

	onCardDragstart(event) {
		var player = this.game.turn,
			card = this.game.hands.get(player)
				.find(c => c.id == event.target.id);
		if (card) {

			// TODO fix
			window.cardInPlay = card;
			return true;
		}
	}
}