System.register(['aurelia-framework'], function (_export) {
	var inject, bindable, _classCallCheck, _createClass, CardCustomElement;

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			'use strict';

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			_createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			CardCustomElement = (function () {
				function CardCustomElement(element) {
					_classCallCheck(this, _CardCustomElement);

					this.element = element;
				}

				var _CardCustomElement = CardCustomElement;

				_createClass(_CardCustomElement, [{
					key: 'bind',
					value: function bind() {
						if (this.model) {
							this.element.id = this.model.id;
						}
					}
				}]);

				CardCustomElement = bindable('model')(CardCustomElement) || CardCustomElement;
				CardCustomElement = inject(Element)(CardCustomElement) || CardCustomElement;
				return CardCustomElement;
			})();

			_export('CardCustomElement', CardCustomElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3NEQUlhLGlCQUFpQjs7Ozs4QkFKckIsTUFBTTtnQ0FBRSxRQUFROzs7Ozs7Ozs7QUFJWixvQkFBaUI7QUFJbEIsYUFKQyxpQkFBaUIsQ0FJakIsT0FBTyxFQUFFOzs7QUFDcEIsU0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDdkI7OzZCQU5XLGlCQUFpQjs7OztZQVF6QixnQkFBRztBQUNOLFVBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNmLFdBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO09BQ2hDO01BQ0Q7OztBQVpXLHFCQUFpQixHQUQ3QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQ0wsaUJBQWlCLEtBQWpCLGlCQUFpQjtBQUFqQixxQkFBaUIsR0FGN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUVILGlCQUFpQixLQUFqQixpQkFBaUI7V0FBakIsaUJBQWlCOzs7Z0NBQWpCLGlCQUFpQiIsImZpbGUiOiJjb21wb25lbnRzL2NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGluamVjdChFbGVtZW50KVxyXG5AYmluZGFibGUoJ21vZGVsJylcclxuZXhwb3J0IGNsYXNzIENhcmRDdXN0b21FbGVtZW50IHtcclxuXHJcblx0Ly8gQGJpbmRhYmxlIG1vZGVsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihlbGVtZW50KSB7IFxyXG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHR9XHJcblxyXG5cdGJpbmQoKSB7XHJcblx0XHRpZiAodGhpcy5tb2RlbCkge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQuaWQgPSB0aGlzLm1vZGVsLmlkO1x0XHJcblx0XHR9XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9