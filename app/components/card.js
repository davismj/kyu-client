import { inject, bindable } from 'aurelia-framework';

@inject(Element)
@bindable('model')
export class CardCustomElement {

	// @bindable model;

	constructor(element) { 
		this.element = element;
	}

	bind() {
		if (this.model) {
			this.element.id = this.model.id;	
		}
	}
}