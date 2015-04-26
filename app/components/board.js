import { inject, bindable } from 'aurelia-framework';
import {ObserverLocator} from 'aurelia-binding';

@inject(ObserverLocator)
@bindable('game')
export class BoardCustomElement {

	// @bindable game;

	constructor(obsLoc) {
		this.updateBoard = () => {
			if (this.game) {
				obsLoc.getObserver(this.game, 'board')
					.trigger(this.game.board);	
			}
		};
	}

	range(n) {
		var arr = [];
		while (n > 0) {
			arr.unshift(--n);
		}
		return arr;
	}

	isOwned(x, y) {
		var card = this.game.board[x + 3*y];
		return card && card.owner == window.player1;
	}

	getCard(x,y) {
		var pos = x + 3*y,
			card = this.game.board[pos],
			arr = [];
		if (card) {
			arr.push(card);
		}
		return arr;
	}

	getPlay(event) {
		var target = event.currentTarget,
			game = this.game,
			player = game.turn,
			card = this.game.hands.get(player)
				.find(c => c == window.cardInPlay),
			position = parseInt(target.getAttribute('data-pos'));
		return [target, game, player, card, position];
	}

	onDragover(event) {
		var [target, game, player, card, position] = this.getPlay(event),
			canPlay = game.canPlay(player, card, position);
		target.style.background = canPlay ? 'green' : 'red';
	}
	onDragleave(event) {
		var target = event.currentTarget;
		target.style.background = '';
	}
	onDrop(event) {
		var [target, game, player, card, position] = this.getPlay(event);

		// if the current player can play the card at the position
		if (game.canPlay(player, card, position)) {

			// then play the card at the position
			game.play(player, card, position);

			this.updateBoard();
		}

		// otherwise reset the ui
		target.style.background = '';

		window.cardInPlay = null;
	}
}