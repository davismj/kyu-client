import { inject, bindable } from 'aurelia-framework';
import { App } from 'app';

const successColor = '#9AB27C';

@inject(App, Element)
@bindable('game')
export class BoardCustomElement {

	// @bindable game;

	constructor(app, element) {
		this.player1 = app.player1;
		Object.defineProperty(this, 'cardInPlay', {
			get: () => {
				return app.cardInPlay;
			},
			set: (val) => {
				app.cardInPlay = val;
			}
		});
	}
	getPlay(event) {
		var target = event.currentTarget,
			game = this.game,
			player = game.turn,
			card = this.game.hands.get(player)
				.find(c => c == this.cardInPlay),
			position = parseInt(target.getAttribute('data-pos'));
		return [target, game, player, card, position];
	}

	onMouseenter(event) {
		if (this.cardInPlay) {
			var target = event.currentTarget;
			target.classList.add('success');	
		}
	}

	onMouseleave(event) {
		if (this.cardInPlay) {
			var target = event.currentTarget;
			target.classList.remove('success');
		}
	}

	onMouseup(event) {
		if (this.cardInPlay) {

			var [target, game, player, card, position] = this.getPlay(event);

			// if the current player can play the card at the position
			if (game.canPlay(player, card, position)) {

				// then play the card at the position
				game.play(player, card, position);
			}

			// otherwise reset the ui
			target.classList.remove('success');
		}
	}
}