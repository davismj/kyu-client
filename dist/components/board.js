System.register(['aurelia-framework', 'app'], function (_export) {
	var inject, bindable, App, _slicedToArray, _classCallCheck, _createClass, successColor, BoardCustomElement;

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
		}, function (_app) {
			App = _app.App;
		}],
		execute: function () {
			'use strict';

			_slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			_createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			successColor = '#9AB27C';

			BoardCustomElement = (function () {
				function BoardCustomElement(app, element) {
					_classCallCheck(this, _BoardCustomElement);

					this.player1 = app.player1;
					Object.defineProperty(this, 'cardInPlay', {
						get: function get() {
							return app.cardInPlay;
						},
						set: function set(val) {
							app.cardInPlay = val;
						}
					});
				}

				var _BoardCustomElement = BoardCustomElement;

				_createClass(_BoardCustomElement, [{
					key: 'getPlay',
					value: function getPlay(event) {
						var _this = this;

						var target = event.currentTarget,
						    game = this.game,
						    player = game.turn,
						    card = this.game.hands.get(player).find(function (c) {
							return c == _this.cardInPlay;
						}),
						    position = parseInt(target.getAttribute('data-pos'));
						return [target, game, player, card, position];
					}
				}, {
					key: 'onMouseenter',
					value: function onMouseenter(event) {
						if (this.cardInPlay) {
							var target = event.currentTarget;
							target.classList.add('success');
						}
					}
				}, {
					key: 'onMouseleave',
					value: function onMouseleave(event) {
						if (this.cardInPlay) {
							var target = event.currentTarget;
							target.classList.remove('success');
						}
					}
				}, {
					key: 'onMouseup',
					value: function onMouseup(event) {
						if (this.cardInPlay) {
							var _getPlay = this.getPlay(event);

							var _getPlay2 = _slicedToArray(_getPlay, 5);

							var target = _getPlay2[0];
							var game = _getPlay2[1];
							var player = _getPlay2[2];
							var card = _getPlay2[3];
							var position = _getPlay2[4];

							if (game.canPlay(player, card, position)) {
								game.play(player, card, position);
							}

							target.classList.remove('success');
						}
					}
				}]);

				BoardCustomElement = bindable('game')(BoardCustomElement) || BoardCustomElement;
				BoardCustomElement = inject(App, Element)(BoardCustomElement) || BoardCustomElement;
				return BoardCustomElement;
			})();

			_export('BoardCustomElement', BoardCustomElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjsyRUFHTSxZQUFZLEVBSUwsa0JBQWtCOzs7OzhCQVB0QixNQUFNO2dDQUFFLFFBQVE7O2NBQ2hCLEdBQUc7Ozs7Ozs7Ozs7O0FBRU4sZUFBWSxHQUFHLFNBQVM7O0FBSWpCLHFCQUFrQjtBQUluQixhQUpDLGtCQUFrQixDQUlsQixHQUFHLEVBQUUsT0FBTyxFQUFFOzs7QUFDekIsU0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBQzNCLFdBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtBQUN6QyxTQUFHLEVBQUUsZUFBTTtBQUNWLGNBQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQztPQUN0QjtBQUNELFNBQUcsRUFBRSxhQUFDLEdBQUcsRUFBSztBQUNiLFVBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO09BQ3JCO01BQ0QsQ0FBQyxDQUFDO0tBQ0g7OzhCQWRXLGtCQUFrQjs7OztZQWV2QixpQkFBQyxLQUFLLEVBQUU7OztBQUNkLFVBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhO1VBQy9CLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtVQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUk7VUFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FDaEMsSUFBSSxDQUFDLFVBQUEsQ0FBQztjQUFJLENBQUMsSUFBSSxNQUFLLFVBQVU7T0FBQSxDQUFDO1VBQ2pDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3RELGFBQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7TUFDOUM7OztZQUVXLHNCQUFDLEtBQUssRUFBRTtBQUNuQixVQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDcEIsV0FBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztBQUNqQyxhQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztPQUNoQztNQUNEOzs7WUFFVyxzQkFBQyxLQUFLLEVBQUU7QUFDbkIsVUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ3BCLFdBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7QUFDakMsYUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDbkM7TUFDRDs7O1lBRVEsbUJBQUMsS0FBSyxFQUFFO0FBQ2hCLFVBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtzQkFFeUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Ozs7V0FBM0QsTUFBTTtXQUFFLElBQUk7V0FBRSxNQUFNO1dBQUUsSUFBSTtXQUFFLFFBQVE7O0FBR3pDLFdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFO0FBR3pDLFlBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNsQzs7QUFHRCxhQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztPQUNuQztNQUNEOzs7QUF0RFcsc0JBQWtCLEdBRDlCLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FDSixrQkFBa0IsS0FBbEIsa0JBQWtCO0FBQWxCLHNCQUFrQixHQUY5QixNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUVSLGtCQUFrQixLQUFsQixrQkFBa0I7V0FBbEIsa0JBQWtCOzs7aUNBQWxCLGtCQUFrQiIsImZpbGUiOiJjb21wb25lbnRzL2JvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnYXBwJztcclxuXHJcbmNvbnN0IHN1Y2Nlc3NDb2xvciA9ICcjOUFCMjdDJztcclxuXHJcbkBpbmplY3QoQXBwLCBFbGVtZW50KVxyXG5AYmluZGFibGUoJ2dhbWUnKVxyXG5leHBvcnQgY2xhc3MgQm9hcmRDdXN0b21FbGVtZW50IHtcclxuXHJcblx0Ly8gQGJpbmRhYmxlIGdhbWU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGFwcCwgZWxlbWVudCkge1xyXG5cdFx0dGhpcy5wbGF5ZXIxID0gYXBwLnBsYXllcjE7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NhcmRJblBsYXknLCB7XHJcblx0XHRcdGdldDogKCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBhcHAuY2FyZEluUGxheTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiAodmFsKSA9PiB7XHJcblx0XHRcdFx0YXBwLmNhcmRJblBsYXkgPSB2YWw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZXRQbGF5KGV2ZW50KSB7XHJcblx0XHR2YXIgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCxcclxuXHRcdFx0Z2FtZSA9IHRoaXMuZ2FtZSxcclxuXHRcdFx0cGxheWVyID0gZ2FtZS50dXJuLFxyXG5cdFx0XHRjYXJkID0gdGhpcy5nYW1lLmhhbmRzLmdldChwbGF5ZXIpXHJcblx0XHRcdFx0LmZpbmQoYyA9PiBjID09IHRoaXMuY2FyZEluUGxheSksXHJcblx0XHRcdHBvc2l0aW9uID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3MnKSk7XHJcblx0XHRyZXR1cm4gW3RhcmdldCwgZ2FtZSwgcGxheWVyLCBjYXJkLCBwb3NpdGlvbl07XHJcblx0fVxyXG5cclxuXHRvbk1vdXNlZW50ZXIoZXZlbnQpIHtcclxuXHRcdGlmICh0aGlzLmNhcmRJblBsYXkpIHtcclxuXHRcdFx0dmFyIHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzJyk7XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uTW91c2VsZWF2ZShldmVudCkge1xyXG5cdFx0aWYgKHRoaXMuY2FyZEluUGxheSkge1xyXG5cdFx0XHR2YXIgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuXHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3MnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uTW91c2V1cChldmVudCkge1xyXG5cdFx0aWYgKHRoaXMuY2FyZEluUGxheSkge1xyXG5cclxuXHRcdFx0dmFyIFt0YXJnZXQsIGdhbWUsIHBsYXllciwgY2FyZCwgcG9zaXRpb25dID0gdGhpcy5nZXRQbGF5KGV2ZW50KTtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBjdXJyZW50IHBsYXllciBjYW4gcGxheSB0aGUgY2FyZCBhdCB0aGUgcG9zaXRpb25cclxuXHRcdFx0aWYgKGdhbWUuY2FuUGxheShwbGF5ZXIsIGNhcmQsIHBvc2l0aW9uKSkge1xyXG5cclxuXHRcdFx0XHQvLyB0aGVuIHBsYXkgdGhlIGNhcmQgYXQgdGhlIHBvc2l0aW9uXHJcblx0XHRcdFx0Z2FtZS5wbGF5KHBsYXllciwgY2FyZCwgcG9zaXRpb24pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBvdGhlcndpc2UgcmVzZXQgdGhlIHVpXHJcblx0XHRcdHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJyk7XHJcblx0XHR9XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9