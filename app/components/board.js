import { inject, bindable } from 'aurelia-framework';
import { App } from 'app';

const successColor = '#9AB27C';

@inject(App)
@bindable('game')
export class BoardCustomElement {

	// @bindable game;

	constructor(app) {
		this.player1 = app.player1;
	}

	// TODO remove when repeat.for="i of 5" is supported
	range(n) {
		var arr = [];
		while (n > 0) {
			arr.unshift(--n);
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
		if (canPlay) {
			target.style.background = successColor;
		}
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
		}

		// otherwise reset the ui
		target.style.background = '';

		window.cardInPlay = null;
	}
}