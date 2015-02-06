import { Metadata } from 'aurelia-framework';
import { Card } from 'kyu-core';
export class App {
	static metadata() { return Metadata.singleton(); }
	constructor() { 
		this.currentView = 'start';
	}
	startGame() {
		this.currentView = 'game';
		this.player2 = { hand: [] };
		this.player1 = { hand: [] };
		for (var i = 0; i < 5; i++) {
			this.player1.hand.push(Card.random());
			this.player2.hand.push(Card.random());
		}
	}
	dragstart() {
		var event = this.$event;
		event.dataTransfer.setData('card', event.target);
	}
	dragover() {
		var target = this.$event.currentTarget;
		target.style.background = 'red';
	}
	dragleave() {
		var target = this.$event.currentTarget;
		target.style.background = '';
	}
	drop() {
		var target = this.$event.currentTarget,
			card = this.$event.dataTransfer.getData('card');
		// card.remove();
		target.appendChild(card);
	}
}