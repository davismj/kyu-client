import { bindable } from 'aurelia-framework';

export class BoardCustomElement {

	@bindable game;

  gameChanged(game) {
    this.player1 = Array.from(game.players)[0];
  }

  getCardAtPos(pos) {
    return this.game.board[pos];
  }
}
