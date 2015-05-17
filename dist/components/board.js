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
						}

						target.style.background = '';

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjsyRUFHTSxZQUFZLEVBSUwsa0JBQWtCOzs7OzhCQVB0QixNQUFNO2dDQUFFLFFBQVE7O2NBQ2hCLEdBQUc7Ozs7Ozs7Ozs7O0FBRU4sZUFBWSxHQUFHLFNBQVM7O0FBSWpCLHFCQUFrQjtBQUluQixhQUpDLGtCQUFrQixDQUlsQixHQUFHLEVBQUU7OztBQUNoQixTQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7S0FDM0I7OzhCQU5XLGtCQUFrQjs7OztZQVN6QixlQUFDLENBQUMsRUFBRTtBQUNSLFVBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLGFBQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNiLFVBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztPQUNqQjtBQUNELGFBQU8sR0FBRyxDQUFDO01BQ1g7OztZQUVNLGlCQUFDLEtBQUssRUFBRTtBQUNkLFVBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhO1VBQy9CLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtVQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUk7VUFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FDaEMsSUFBSSxDQUFDLFVBQUEsQ0FBQztjQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsVUFBVTtPQUFBLENBQUM7VUFDbkMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDdEQsYUFBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztNQUM5Qzs7O1lBRVMsb0JBQUMsS0FBSyxFQUFFO3FCQUM0QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs7OztVQUEzRCxNQUFNO1VBQUUsSUFBSTtVQUFFLE1BQU07VUFBRSxJQUFJO0FBQTNCLFVBQTZCLFFBQVEsZ0JBQXVCO0FBQy9ELFVBQUEsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUMvQyxVQUFJLE9BQU8sRUFBRTtBQUNaLGFBQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztPQUN2QztNQUNEOzs7WUFDVSxxQkFBQyxLQUFLLEVBQUU7QUFDbEIsVUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztBQUNqQyxZQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7TUFDN0I7OztZQUNLLGdCQUFDLEtBQUssRUFBRTtzQkFDZ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Ozs7VUFBM0QsTUFBTTtVQUFFLElBQUk7VUFBRSxNQUFNO1VBQUUsSUFBSTtVQUFFLFFBQVE7O0FBR3pDLFVBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFO0FBR3pDLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztPQUNsQzs7QUFHRCxZQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRTdCLFlBQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO01BQ3pCOzs7QUFwRFcsc0JBQWtCLEdBRDlCLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FDSixrQkFBa0IsS0FBbEIsa0JBQWtCO0FBQWxCLHNCQUFrQixHQUY5QixNQUFNLENBQUMsR0FBRyxDQUFDLENBRUMsa0JBQWtCLEtBQWxCLGtCQUFrQjtXQUFsQixrQkFBa0I7OztpQ0FBbEIsa0JBQWtCIiwiZmlsZSI6ImNvbXBvbmVudHMvYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdhcHAnO1xyXG5cclxuY29uc3Qgc3VjY2Vzc0NvbG9yID0gJyM5QUIyN0MnO1xyXG5cclxuQGluamVjdChBcHApXHJcbkBiaW5kYWJsZSgnZ2FtZScpXHJcbmV4cG9ydCBjbGFzcyBCb2FyZEN1c3RvbUVsZW1lbnQge1xyXG5cclxuXHQvLyBAYmluZGFibGUgZ2FtZTtcclxuXHJcblx0Y29uc3RydWN0b3IoYXBwKSB7XHJcblx0XHR0aGlzLnBsYXllcjEgPSBhcHAucGxheWVyMTtcclxuXHR9XHJcblxyXG5cdC8vIFRPRE8gcmVtb3ZlIHdoZW4gcmVwZWF0LmZvcj1cImkgb2YgNVwiIGlzIHN1cHBvcnRlZFxyXG5cdHJhbmdlKG4pIHtcclxuXHRcdHZhciBhcnIgPSBbXTtcclxuXHRcdHdoaWxlIChuID4gMCkge1xyXG5cdFx0XHRhcnIudW5zaGlmdCgtLW4pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGFycjtcclxuXHR9XHJcblxyXG5cdGdldFBsYXkoZXZlbnQpIHtcclxuXHRcdHZhciB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxyXG5cdFx0XHRnYW1lID0gdGhpcy5nYW1lLFxyXG5cdFx0XHRwbGF5ZXIgPSBnYW1lLnR1cm4sXHJcblx0XHRcdGNhcmQgPSB0aGlzLmdhbWUuaGFuZHMuZ2V0KHBsYXllcilcclxuXHRcdFx0XHQuZmluZChjID0+IGMgPT0gd2luZG93LmNhcmRJblBsYXkpLFxyXG5cdFx0XHRwb3NpdGlvbiA9IHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zJykpO1xyXG5cdFx0cmV0dXJuIFt0YXJnZXQsIGdhbWUsIHBsYXllciwgY2FyZCwgcG9zaXRpb25dO1xyXG5cdH1cclxuXHJcblx0b25EcmFnb3ZlcihldmVudCkge1xyXG5cdFx0dmFyIFt0YXJnZXQsIGdhbWUsIHBsYXllciwgY2FyZCwgcG9zaXRpb25dID0gdGhpcy5nZXRQbGF5KGV2ZW50KSxcclxuXHRcdFx0Y2FuUGxheSA9IGdhbWUuY2FuUGxheShwbGF5ZXIsIGNhcmQsIHBvc2l0aW9uKTtcclxuXHRcdGlmIChjYW5QbGF5KSB7XHJcblx0XHRcdHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gc3VjY2Vzc0NvbG9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRvbkRyYWdsZWF2ZShldmVudCkge1xyXG5cdFx0dmFyIHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblx0XHR0YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xyXG5cdH1cclxuXHRvbkRyb3AoZXZlbnQpIHtcclxuXHRcdHZhciBbdGFyZ2V0LCBnYW1lLCBwbGF5ZXIsIGNhcmQsIHBvc2l0aW9uXSA9IHRoaXMuZ2V0UGxheShldmVudCk7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGN1cnJlbnQgcGxheWVyIGNhbiBwbGF5IHRoZSBjYXJkIGF0IHRoZSBwb3NpdGlvblxyXG5cdFx0aWYgKGdhbWUuY2FuUGxheShwbGF5ZXIsIGNhcmQsIHBvc2l0aW9uKSkge1xyXG5cclxuXHRcdFx0Ly8gdGhlbiBwbGF5IHRoZSBjYXJkIGF0IHRoZSBwb3NpdGlvblxyXG5cdFx0XHRnYW1lLnBsYXkocGxheWVyLCBjYXJkLCBwb3NpdGlvbik7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gb3RoZXJ3aXNlIHJlc2V0IHRoZSB1aVxyXG5cdFx0dGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnJztcclxuXHJcblx0XHR3aW5kb3cuY2FyZEluUGxheSA9IG51bGw7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9