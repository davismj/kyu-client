import { Game, Player, ComputerPlayer, Card } from 'kyu-core';

export class App {
	
	constructor() { 
		this.currentView = 'start'; 
		this.player1 = Player.new('Player 1');
	}

	newGame() {
		var game = Game.new(),
			p1 = this.player1,
			p2 = this.player2 = ComputerPlayer.new();
		for (let i = 0; i < 5; i++) {
			p1.cards.push(Card.random());
		}
		game.add(p1, p1.cards.slice());
		game.add(p2, p2.chooseHand());
		game.start();

		this.game = game;
		this.currentView = 'game';
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