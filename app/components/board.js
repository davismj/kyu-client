import { inject, bindable } from 'aurelia-framework';
import { App } from 'app';

// TODO remove reference to app, need to handle this differently
@inject(App, Element)
@bindable('game')
export class BoardCustomElement {

	// @bindable game;

	constructor(app) {
		this.player1 = app.player1;
	}
}