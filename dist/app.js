System.register(['kyu-core'], function (_export) {
	var Game, Player, ComputerPlayer, Card, _classCallCheck, _createClass, App;

	return {
		setters: [function (_kyuCore) {
			Game = _kyuCore.Game;
			Player = _kyuCore.Player;
			ComputerPlayer = _kyuCore.ComputerPlayer;
			Card = _kyuCore.Card;
		}],
		execute: function () {
			'use strict';

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			_createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			App = (function () {
				function App() {
					_classCallCheck(this, App);

					this.currentView = 'start';
					this.player1 = Player['new']('Player 1');
				}

				_createClass(App, [{
					key: 'newGame',
					value: function newGame() {
						var game = Game['new'](),
						    p1 = this.player1,
						    p2 = this.player2 = ComputerPlayer['new']();
						for (var i = 0; i < 5; i++) {
							p1.cards.push(Card.random());
						}
						game.add(p1, p1.cards.slice());
						game.add(p2, p2.chooseHand());
						game.start();

						this.game = game;
						this.currentView = 'game';
					}
				}, {
					key: 'onCardDragstart',
					value: function onCardDragstart(event) {
						var player = this.game.turn,
						    card = this.game.hands.get(player).find(function (c) {
							return c.id == event.target.id;
						});
						if (card) {
							window.cardInPlay = card;
							return true;
						}
					}
				}]);

				return App;
			})();

			_export('App', App);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3dFQUVhLEdBQUc7Ozs7bUJBRlAsSUFBSTtxQkFBRSxNQUFNOzZCQUFFLGNBQWM7bUJBQUUsSUFBSTs7Ozs7Ozs7O0FBRTlCLE1BQUc7QUFFSixhQUZDLEdBQUcsR0FFRDsyQkFGRixHQUFHOztBQUdkLFNBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO0FBQzNCLFNBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxPQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDdEM7O2lCQUxXLEdBQUc7O1lBT1IsbUJBQUc7QUFDVCxVQUFJLElBQUksR0FBRyxJQUFJLE9BQUksRUFBRTtVQUNwQixFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87VUFDakIsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxPQUFJLEVBQUUsQ0FBQztBQUMxQyxXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzNCLFNBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0FBQ0QsVUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLFVBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQzlCLFVBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7QUFFYixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixVQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztNQUMxQjs7O1lBRWMseUJBQUMsS0FBSyxFQUFFO0FBQ3RCLFVBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtVQUMxQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUNoQyxJQUFJLENBQUMsVUFBQSxDQUFDO2NBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7T0FBQSxDQUFDLENBQUM7QUFDdEMsVUFBSSxJQUFJLEVBQUU7QUFHVCxhQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN6QixjQUFPLElBQUksQ0FBQztPQUNaO01BQ0Q7OztXQWhDVyxHQUFHOzs7a0JBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lLCBQbGF5ZXIsIENvbXB1dGVyUGxheWVyLCBDYXJkIH0gZnJvbSAna3l1LWNvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdFx0dGhpcy5jdXJyZW50VmlldyA9ICdzdGFydCc7IFxyXG5cdFx0dGhpcy5wbGF5ZXIxID0gUGxheWVyLm5ldygnUGxheWVyIDEnKTtcclxuXHR9XHJcblxyXG5cdG5ld0dhbWUoKSB7XHJcblx0XHR2YXIgZ2FtZSA9IEdhbWUubmV3KCksXHJcblx0XHRcdHAxID0gdGhpcy5wbGF5ZXIxLFxyXG5cdFx0XHRwMiA9IHRoaXMucGxheWVyMiA9IENvbXB1dGVyUGxheWVyLm5ldygpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuXHRcdFx0cDEuY2FyZHMucHVzaChDYXJkLnJhbmRvbSgpKTtcclxuXHRcdH1cclxuXHRcdGdhbWUuYWRkKHAxLCBwMS5jYXJkcy5zbGljZSgpKTtcclxuXHRcdGdhbWUuYWRkKHAyLCBwMi5jaG9vc2VIYW5kKCkpO1xyXG5cdFx0Z2FtZS5zdGFydCgpO1xyXG5cclxuXHRcdHRoaXMuZ2FtZSA9IGdhbWU7XHJcblx0XHR0aGlzLmN1cnJlbnRWaWV3ID0gJ2dhbWUnO1xyXG5cdH1cclxuXHJcblx0b25DYXJkRHJhZ3N0YXJ0KGV2ZW50KSB7XHJcblx0XHR2YXIgcGxheWVyID0gdGhpcy5nYW1lLnR1cm4sXHJcblx0XHRcdGNhcmQgPSB0aGlzLmdhbWUuaGFuZHMuZ2V0KHBsYXllcilcclxuXHRcdFx0XHQuZmluZChjID0+IGMuaWQgPT0gZXZlbnQudGFyZ2V0LmlkKTtcclxuXHRcdGlmIChjYXJkKSB7XHJcblxyXG5cdFx0XHQvLyBUT0RPIGZpeFxyXG5cdFx0XHR3aW5kb3cuY2FyZEluUGxheSA9IGNhcmQ7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==