System.register(['aurelia-framework', 'aurelia-binding'], function (_export) {
	var inject, bindable, ObserverLocator, _slicedToArray, _classCallCheck, _createClass, BoardCustomElement;

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
		}, function (_aureliaBinding) {
			ObserverLocator = _aureliaBinding.ObserverLocator;
		}],
		execute: function () {
			'use strict';

			_slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			_createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			BoardCustomElement = (function () {
				function BoardCustomElement(obsLoc) {
					var _this = this;

					_classCallCheck(this, _BoardCustomElement);

					this.updateBoard = function () {
						if (_this.game) {
							obsLoc.getObserver(_this.game, 'board').trigger(_this.game.board);
						}
					};
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
						return card && card.owner == window.player1;
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
						target.style.background = canPlay ? 'green' : 'red';
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
				BoardCustomElement = inject(ObserverLocator)(BoardCustomElement) || BoardCustomElement;
				return BoardCustomElement;
			})();

			_export('BoardCustomElement', BoardCustomElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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QUMsS0FBSyxDQUFDOzs7O1VBQTNELE1BQU07VUFBRSxJQUFJO1VBQUUsTUFBTTtVQUFFLElBQUk7VUFBRSxRQUFROztBQUd6QyxVQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRTtBQUd6QyxXQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7O0FBRWxDLFdBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztPQUNuQjs7QUFHRCxZQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRTdCLFlBQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO01BQ3pCOzs7QUF2RVcsc0JBQWtCLEdBRDlCLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FDSixrQkFBa0IsS0FBbEIsa0JBQWtCO0FBQWxCLHNCQUFrQixHQUY5QixNQUFNLENBQUMsZUFBZSxDQUFDLENBRVgsa0JBQWtCLEtBQWxCLGtCQUFrQjtXQUFsQixrQkFBa0I7OztpQ0FBbEIsa0JBQWtCIiwiZmlsZSI6ImNvbXBvbmVudHMvYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge09ic2VydmVyTG9jYXRvcn0gZnJvbSAnYXVyZWxpYS1iaW5kaW5nJztcclxuXHJcbkBpbmplY3QoT2JzZXJ2ZXJMb2NhdG9yKVxyXG5AYmluZGFibGUoJ2dhbWUnKVxyXG5leHBvcnQgY2xhc3MgQm9hcmRDdXN0b21FbGVtZW50IHtcclxuXHJcblx0Ly8gQGJpbmRhYmxlIGdhbWU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9ic0xvYykge1xyXG5cdFx0dGhpcy51cGRhdGVCb2FyZCA9ICgpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuZ2FtZSkge1xyXG5cdFx0XHRcdG9ic0xvYy5nZXRPYnNlcnZlcih0aGlzLmdhbWUsICdib2FyZCcpXHJcblx0XHRcdFx0XHQudHJpZ2dlcih0aGlzLmdhbWUuYm9hcmQpO1x0XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRyYW5nZShuKSB7XHJcblx0XHR2YXIgYXJyID0gW107XHJcblx0XHR3aGlsZSAobiA+IDApIHtcclxuXHRcdFx0YXJyLnVuc2hpZnQoLS1uKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBhcnI7XHJcblx0fVxyXG5cclxuXHRpc093bmVkKHgsIHkpIHtcclxuXHRcdHZhciBjYXJkID0gdGhpcy5nYW1lLmJvYXJkW3ggKyAzKnldO1xyXG5cdFx0cmV0dXJuIGNhcmQgJiYgY2FyZC5vd25lciA9PSB3aW5kb3cucGxheWVyMTtcclxuXHR9XHJcblxyXG5cdGdldENhcmQoeCx5KSB7XHJcblx0XHR2YXIgcG9zID0geCArIDMqeSxcclxuXHRcdFx0Y2FyZCA9IHRoaXMuZ2FtZS5ib2FyZFtwb3NdLFxyXG5cdFx0XHRhcnIgPSBbXTtcclxuXHRcdGlmIChjYXJkKSB7XHJcblx0XHRcdGFyci5wdXNoKGNhcmQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGFycjtcclxuXHR9XHJcblxyXG5cdGdldFBsYXkoZXZlbnQpIHtcclxuXHRcdHZhciB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxyXG5cdFx0XHRnYW1lID0gdGhpcy5nYW1lLFxyXG5cdFx0XHRwbGF5ZXIgPSBnYW1lLnR1cm4sXHJcblx0XHRcdGNhcmQgPSB0aGlzLmdhbWUuaGFuZHMuZ2V0KHBsYXllcilcclxuXHRcdFx0XHQuZmluZChjID0+IGMgPT0gd2luZG93LmNhcmRJblBsYXkpLFxyXG5cdFx0XHRwb3NpdGlvbiA9IHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zJykpO1xyXG5cdFx0cmV0dXJuIFt0YXJnZXQsIGdhbWUsIHBsYXllciwgY2FyZCwgcG9zaXRpb25dO1xyXG5cdH1cclxuXHJcblx0b25EcmFnb3ZlcihldmVudCkge1xyXG5cdFx0dmFyIFt0YXJnZXQsIGdhbWUsIHBsYXllciwgY2FyZCwgcG9zaXRpb25dID0gdGhpcy5nZXRQbGF5KGV2ZW50KSxcclxuXHRcdFx0Y2FuUGxheSA9IGdhbWUuY2FuUGxheShwbGF5ZXIsIGNhcmQsIHBvc2l0aW9uKTtcclxuXHRcdHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gY2FuUGxheSA/ICdncmVlbicgOiAncmVkJztcclxuXHR9XHJcblx0b25EcmFnbGVhdmUoZXZlbnQpIHtcclxuXHRcdHZhciB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cdFx0dGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnJztcclxuXHR9XHJcblx0b25Ecm9wKGV2ZW50KSB7XHJcblx0XHR2YXIgW3RhcmdldCwgZ2FtZSwgcGxheWVyLCBjYXJkLCBwb3NpdGlvbl0gPSB0aGlzLmdldFBsYXkoZXZlbnQpO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBjdXJyZW50IHBsYXllciBjYW4gcGxheSB0aGUgY2FyZCBhdCB0aGUgcG9zaXRpb25cclxuXHRcdGlmIChnYW1lLmNhblBsYXkocGxheWVyLCBjYXJkLCBwb3NpdGlvbikpIHtcclxuXHJcblx0XHRcdC8vIHRoZW4gcGxheSB0aGUgY2FyZCBhdCB0aGUgcG9zaXRpb25cclxuXHRcdFx0Z2FtZS5wbGF5KHBsYXllciwgY2FyZCwgcG9zaXRpb24pO1xyXG5cclxuXHRcdFx0dGhpcy51cGRhdGVCb2FyZCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG90aGVyd2lzZSByZXNldCB0aGUgdWlcclxuXHRcdHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XHJcblxyXG5cdFx0d2luZG93LmNhcmRJblBsYXkgPSBudWxsO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==