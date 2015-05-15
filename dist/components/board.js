System.register(['aurelia-framework', 'aurelia-binding', 'app'], function (_export) {
	var inject, bindable, ObserverLocator, App, _slicedToArray, _classCallCheck, _createClass, successColor, BoardCustomElement;

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
		}, function (_aureliaBinding) {
			ObserverLocator = _aureliaBinding.ObserverLocator;
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
				function BoardCustomElement(obsLoc, app) {
					var _this = this;

					_classCallCheck(this, _BoardCustomElement);

					this.updateBoard = function () {
						if (_this.game) {
							obsLoc.getObserver(_this.game, 'board').trigger(_this.game.board);
						}
					};
					this.player1 = app.player1;
				}

				var _BoardCustomElement = BoardCustomElement;

				_createClass(_BoardCustomElement, [{
					key: 'range',
					value: function range(n) {
						var arr = [];
						while (n > 0) {
							arr.unshift(--n);
						}
						return arr;
					}
				}, {
					key: 'isOwned',
					value: function isOwned(x, y) {
						var card = this.game.board[x + 3 * y];
						return card && card.owner == this.player1;
					}
				}, {
					key: 'getCard',
					value: function getCard(x, y) {
						var pos = x + 3 * y,
						    card = this.game.board[pos],
						    arr = [];
						if (card) {
							arr.push(card);
						}
						return arr;
					}
				}, {
					key: 'getPlay',
					value: function getPlay(event) {
						var target = event.currentTarget,
						    game = this.game,
						    player = game.turn,
						    card = this.game.hands.get(player).find(function (c) {
							return c == window.cardInPlay;
						}),
						    position = parseInt(target.getAttribute('data-pos'));
						return [target, game, player, card, position];
					}
				}, {
					key: 'onDragover',
					value: function onDragover(event) {
						var _getPlay = this.getPlay(event);

						var _getPlay2 = _slicedToArray(_getPlay, 5);

						var target = _getPlay2[0];
						var game = _getPlay2[1];
						var player = _getPlay2[2];
						var card = _getPlay2[3];
						var position = _getPlay2[4];
						var canPlay = game.canPlay(player, card, position);
						if (canPlay) {
							target.style.background = successColor;
						}
					}
				}, {
					key: 'onDragleave',
					value: function onDragleave(event) {
						var target = event.currentTarget;
						target.style.background = '';
					}
				}, {
					key: 'onDrop',
					value: function onDrop(event) {
						var _getPlay3 = this.getPlay(event);

						var _getPlay32 = _slicedToArray(_getPlay3, 5);

						var target = _getPlay32[0];
						var game = _getPlay32[1];
						var player = _getPlay32[2];
						var card = _getPlay32[3];
						var position = _getPlay32[4];

						if (game.canPlay(player, card, position)) {
							game.play(player, card, position);

							this.updateBoard();
						}

						target.style.background = '';

						window.cardInPlay = null;
					}
				}]);

				BoardCustomElement = bindable('game')(BoardCustomElement) || BoardCustomElement;
				BoardCustomElement = inject(ObserverLocator, App)(BoardCustomElement) || BoardCustomElement;
				return BoardCustomElement;
			})();

			_export('BoardCustomElement', BoardCustomElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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Q0FBQztBQUNqQyxZQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7TUFDN0I7OztZQUNLLGdCQUFDLEtBQUssRUFBRTtzQkFDZ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Ozs7VUFBM0QsTUFBTTtVQUFFLElBQUk7VUFBRSxNQUFNO1VBQUUsSUFBSTtVQUFFLFFBQVE7O0FBR3pDLFVBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFO0FBR3pDLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzs7QUFFbEMsV0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO09BQ25COztBQUdELFlBQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFN0IsWUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7TUFDekI7OztBQTNFVyxzQkFBa0IsR0FEOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUNKLGtCQUFrQixLQUFsQixrQkFBa0I7QUFBbEIsc0JBQWtCLEdBRjlCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBRWhCLGtCQUFrQixLQUFsQixrQkFBa0I7V0FBbEIsa0JBQWtCOzs7aUNBQWxCLGtCQUFrQiIsImZpbGUiOiJjb21wb25lbnRzL2JvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBiaW5kYWJsZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgT2JzZXJ2ZXJMb2NhdG9yIH0gZnJvbSAnYXVyZWxpYS1iaW5kaW5nJztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnYXBwJztcclxuXHJcbmNvbnN0IHN1Y2Nlc3NDb2xvciA9ICcjOUFCMjdDJztcclxuXHJcbkBpbmplY3QoT2JzZXJ2ZXJMb2NhdG9yLCBBcHApXHJcbkBiaW5kYWJsZSgnZ2FtZScpXHJcbmV4cG9ydCBjbGFzcyBCb2FyZEN1c3RvbUVsZW1lbnQge1xyXG5cclxuXHQvLyBAYmluZGFibGUgZ2FtZTtcclxuXHJcblx0Y29uc3RydWN0b3Iob2JzTG9jLCBhcHApIHtcclxuXHRcdHRoaXMudXBkYXRlQm9hcmQgPSAoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmdhbWUpIHtcclxuXHRcdFx0XHRvYnNMb2MuZ2V0T2JzZXJ2ZXIodGhpcy5nYW1lLCAnYm9hcmQnKVxyXG5cdFx0XHRcdFx0LnRyaWdnZXIodGhpcy5nYW1lLmJvYXJkKTtcdFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5wbGF5ZXIxID0gYXBwLnBsYXllcjE7XHJcblx0fVxyXG5cclxuXHQvLyBUT0RPIHJlbW92ZSB3aGVuIHJlcGVhdC5mb3I9XCJpIG9mIDVcIiBpcyBzdXBwb3J0ZWRcclxuXHRyYW5nZShuKSB7XHJcblx0XHR2YXIgYXJyID0gW107XHJcblx0XHR3aGlsZSAobiA+IDApIHtcclxuXHRcdFx0YXJyLnVuc2hpZnQoLS1uKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBhcnI7XHJcblx0fVxyXG5cclxuXHRpc093bmVkKHgsIHkpIHtcclxuXHRcdHZhciBjYXJkID0gdGhpcy5nYW1lLmJvYXJkW3ggKyAzKnldO1xyXG5cdFx0cmV0dXJuIGNhcmQgJiYgY2FyZC5vd25lciA9PSB0aGlzLnBsYXllcjE7XHJcblx0fVxyXG5cclxuXHRnZXRDYXJkKHgseSkge1xyXG5cdFx0dmFyIHBvcyA9IHggKyAzKnksXHJcblx0XHRcdGNhcmQgPSB0aGlzLmdhbWUuYm9hcmRbcG9zXSxcclxuXHRcdFx0YXJyID0gW107XHJcblx0XHRpZiAoY2FyZCkge1xyXG5cdFx0XHRhcnIucHVzaChjYXJkKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBhcnI7XHJcblx0fVxyXG5cclxuXHRnZXRQbGF5KGV2ZW50KSB7XHJcblx0XHR2YXIgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCxcclxuXHRcdFx0Z2FtZSA9IHRoaXMuZ2FtZSxcclxuXHRcdFx0cGxheWVyID0gZ2FtZS50dXJuLFxyXG5cdFx0XHRjYXJkID0gdGhpcy5nYW1lLmhhbmRzLmdldChwbGF5ZXIpXHJcblx0XHRcdFx0LmZpbmQoYyA9PiBjID09IHdpbmRvdy5jYXJkSW5QbGF5KSxcclxuXHRcdFx0cG9zaXRpb24gPSBwYXJzZUludCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcycpKTtcclxuXHRcdHJldHVybiBbdGFyZ2V0LCBnYW1lLCBwbGF5ZXIsIGNhcmQsIHBvc2l0aW9uXTtcclxuXHR9XHJcblxyXG5cdG9uRHJhZ292ZXIoZXZlbnQpIHtcclxuXHRcdHZhciBbdGFyZ2V0LCBnYW1lLCBwbGF5ZXIsIGNhcmQsIHBvc2l0aW9uXSA9IHRoaXMuZ2V0UGxheShldmVudCksXHJcblx0XHRcdGNhblBsYXkgPSBnYW1lLmNhblBsYXkocGxheWVyLCBjYXJkLCBwb3NpdGlvbik7XHJcblx0XHRpZiAoY2FuUGxheSkge1xyXG5cdFx0XHR0YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IHN1Y2Nlc3NDb2xvcjtcclxuXHRcdH1cclxuXHR9XHJcblx0b25EcmFnbGVhdmUoZXZlbnQpIHtcclxuXHRcdHZhciB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cdFx0dGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnJztcclxuXHR9XHJcblx0b25Ecm9wKGV2ZW50KSB7XHJcblx0XHR2YXIgW3RhcmdldCwgZ2FtZSwgcGxheWVyLCBjYXJkLCBwb3NpdGlvbl0gPSB0aGlzLmdldFBsYXkoZXZlbnQpO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBjdXJyZW50IHBsYXllciBjYW4gcGxheSB0aGUgY2FyZCBhdCB0aGUgcG9zaXRpb25cclxuXHRcdGlmIChnYW1lLmNhblBsYXkocGxheWVyLCBjYXJkLCBwb3NpdGlvbikpIHtcclxuXHJcblx0XHRcdC8vIHRoZW4gcGxheSB0aGUgY2FyZCBhdCB0aGUgcG9zaXRpb25cclxuXHRcdFx0Z2FtZS5wbGF5KHBsYXllciwgY2FyZCwgcG9zaXRpb24pO1xyXG5cclxuXHRcdFx0dGhpcy51cGRhdGVCb2FyZCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG90aGVyd2lzZSByZXNldCB0aGUgdWlcclxuXHRcdHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XHJcblxyXG5cdFx0d2luZG93LmNhcmRJblBsYXkgPSBudWxsO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==