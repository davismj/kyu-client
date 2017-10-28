import { bindable } from 'aurelia-framework';

export class CardCustomElement {

	@bindable model;

  // refs
  element;
  
	bind() {
		if (this.model) {
			this.element.id = this.model.id;	
		}
	}
}
