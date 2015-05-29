System.register(['aurelia-framework', 'app'], function (_export) {
	var inject, bindable, App, _classCallCheck, BoardCustomElement;

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
		}, function (_app) {
			App = _app.App;
		}],
		execute: function () {
			'use strict';

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			BoardCustomElement = (function () {
				function BoardCustomElement(app) {
					_classCallCheck(this, _BoardCustomElement);

					this.player1 = app.player1;
				}

				var _BoardCustomElement = BoardCustomElement;
				BoardCustomElement = bindable('game')(BoardCustomElement) || BoardCustomElement;
				BoardCustomElement = inject(App, Element)(BoardCustomElement) || BoardCustomElement;
				return BoardCustomElement;
			})();

			_export('BoardCustomElement', BoardCustomElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs2Q0FNYSxrQkFBa0I7Ozs7OEJBTnRCLE1BQU07Z0NBQUUsUUFBUTs7Y0FDaEIsR0FBRzs7Ozs7OztBQUtDLHFCQUFrQjtBQUluQixhQUpDLGtCQUFrQixDQUlsQixHQUFHLEVBQUU7OztBQUNoQixTQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7S0FDM0I7OzhCQU5XLGtCQUFrQjtBQUFsQixzQkFBa0IsR0FEOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUNKLGtCQUFrQixLQUFsQixrQkFBa0I7QUFBbEIsc0JBQWtCLEdBRjlCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBRVIsa0JBQWtCLEtBQWxCLGtCQUFrQjtXQUFsQixrQkFBa0I7OztpQ0FBbEIsa0JBQWtCIiwiZmlsZSI6ImNvbXBvbmVudHMvYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdhcHAnO1xyXG5cclxuLy8gVE9ETyByZW1vdmUgcmVmZXJlbmNlIHRvIGFwcCwgbmVlZCB0byBoYW5kbGUgdGhpcyBkaWZmZXJlbnRseVxyXG5AaW5qZWN0KEFwcCwgRWxlbWVudClcclxuQGJpbmRhYmxlKCdnYW1lJylcclxuZXhwb3J0IGNsYXNzIEJvYXJkQ3VzdG9tRWxlbWVudCB7XHJcblxyXG5cdC8vIEBiaW5kYWJsZSBnYW1lO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhcHApIHtcclxuXHRcdHRoaXMucGxheWVyMSA9IGFwcC5wbGF5ZXIxO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==