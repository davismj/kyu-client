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
				function BoardCustomElement(app) {
					_classCallCheck(this, _BoardCustomElement);

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
							target.classList.add('success');
						}
					}
				}, {
					key: 'onDragleave',
					value: function onDragleave(event) {
						var target = event.currentTarget;
						target.classList.remove('success');
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
						}

						target.classList.remove('success');

						window.cardInPlay = null;
					}
				}]);

				BoardCustomElement = bindable('game')(BoardCustomElement) || BoardCustomElement;
				BoardCustomElement = inject(App)(BoardCustomElement) || BoardCustomElement;
				return BoardCustomElement;
			})();

			_export('BoardCustomElement', BoardCustomElement);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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bmplY3QsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdhcHAnO1xyXG5cclxuY29uc3Qgc3VjY2Vzc0NvbG9yID0gJyM5QUIyN0MnO1xyXG5cclxuQGluamVjdChBcHApXHJcbkBiaW5kYWJsZSgnZ2FtZScpXHJcbmV4cG9ydCBjbGFzcyBCb2FyZEN1c3RvbUVsZW1lbnQge1xyXG5cclxuXHQvLyBAYmluZGFibGUgZ2FtZTtcclxuXHJcblx0Y29uc3RydWN0b3IoYXBwKSB7XHJcblx0XHR0aGlzLnBsYXllcjEgPSBhcHAucGxheWVyMTtcclxuXHR9XHJcblxyXG5cdC8vIFRPRE8gcmVtb3ZlIHdoZW4gcmVwZWF0LmZvcj1cImkgb2YgNVwiIGlzIHN1cHBvcnRlZFxyXG5cdHJhbmdlKG4pIHtcclxuXHRcdHZhciBhcnIgPSBbXTtcclxuXHRcdHdoaWxlIChuID4gMCkge1xyXG5cdFx0XHRhcnIudW5zaGlmdCgtLW4pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGFycjtcclxuXHR9XHJcblxyXG5cdGdldFBsYXkoZXZlbnQpIHtcclxuXHRcdHZhciB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxyXG5cdFx0XHRnYW1lID0gdGhpcy5nYW1lLFxyXG5cdFx0XHRwbGF5ZXIgPSBnYW1lLnR1cm4sXHJcblx0XHRcdGNhcmQgPSB0aGlzLmdhbWUuaGFuZHMuZ2V0KHBsYXllcilcclxuXHRcdFx0XHQuZmluZChjID0+IGMgPT0gd2luZG93LmNhcmRJblBsYXkpLFxyXG5cdFx0XHRwb3NpdGlvbiA9IHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zJykpO1xyXG5cdFx0cmV0dXJuIFt0YXJnZXQsIGdhbWUsIHBsYXllciwgY2FyZCwgcG9zaXRpb25dO1xyXG5cdH1cclxuXHJcblx0b25EcmFnb3ZlcihldmVudCkge1xyXG5cdFx0dmFyIFt0YXJnZXQsIGdhbWUsIHBsYXllciwgY2FyZCwgcG9zaXRpb25dID0gdGhpcy5nZXRQbGF5KGV2ZW50KSxcclxuXHRcdFx0Y2FuUGxheSA9IGdhbWUuY2FuUGxheShwbGF5ZXIsIGNhcmQsIHBvc2l0aW9uKTtcclxuXHRcdGlmIChjYW5QbGF5KSB7XHJcblx0XHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdG9uRHJhZ2xlYXZlKGV2ZW50KSB7XHJcblx0XHR2YXIgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuXHRcdHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJyk7XHJcblx0fVxyXG5cdG9uRHJvcChldmVudCkge1xyXG5cdFx0dmFyIFt0YXJnZXQsIGdhbWUsIHBsYXllciwgY2FyZCwgcG9zaXRpb25dID0gdGhpcy5nZXRQbGF5KGV2ZW50KTtcclxuXHJcblx0XHQvLyBpZiB0aGUgY3VycmVudCBwbGF5ZXIgY2FuIHBsYXkgdGhlIGNhcmQgYXQgdGhlIHBvc2l0aW9uXHJcblx0XHRpZiAoZ2FtZS5jYW5QbGF5KHBsYXllciwgY2FyZCwgcG9zaXRpb24pKSB7XHJcblxyXG5cdFx0XHQvLyB0aGVuIHBsYXkgdGhlIGNhcmQgYXQgdGhlIHBvc2l0aW9uXHJcblx0XHRcdGdhbWUucGxheShwbGF5ZXIsIGNhcmQsIHBvc2l0aW9uKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBvdGhlcndpc2UgcmVzZXQgdGhlIHVpXHJcblx0XHR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycpO1xyXG5cclxuXHRcdHdpbmRvdy5jYXJkSW5QbGF5ID0gbnVsbDtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=