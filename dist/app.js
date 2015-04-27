System.register(['kyu-core'], function (_export) {
	var Game, Player, Card, _classCallCheck, _createClass, App;

	return {
		setters: [function (_kyuCore) {
			Game = _kyuCore.Game;
			Player = _kyuCore.Player;
			Card = _kyuCore.Card;
		}],
		execute: function () {
			'use strict';

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			_createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			App = (function () {
				function App() {
					_classCallCheck(this, App);

					this.currentView = 'game';
					window.player1 = this.player1 = Player['new']('Player 1');
					this.player2 = Player['new']('Player 2');
					this.newGame();
				}

				_createClass(App, [{
					key: 'newGame',
					value: function newGame() {
						var game = Game['new'](),
						    p1 = this.player1,
						    p2 = this.player2;
						for (var i = 0; i < 5; i++) {
							p1.cards.push(Card.random());
							p2.cards.push(Card.random());
						}
						game.add(p1, p1.cards.slice());
						game.add(p2, p2.cards.slice());
						game.start();
						this.game = game;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3dEQUVhLEdBQUc7Ozs7bUJBRlAsSUFBSTtxQkFBRSxNQUFNO21CQUFFLElBQUk7Ozs7Ozs7OztBQUVkLE1BQUc7QUFFSixhQUZDLEdBQUcsR0FFRDsyQkFGRixHQUFHOztBQUdkLFNBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0FBQzFCLFdBQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLE9BQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN2RCxTQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sT0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLFNBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNmOztpQkFQVyxHQUFHOztZQVNSLG1CQUFHO0FBQ1QsVUFBSSxJQUFJLEdBQUcsSUFBSSxPQUFJLEVBQUU7VUFDcEIsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPO1VBQ2pCLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ25CLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDM0IsU0FBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDN0IsU0FBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7T0FDN0I7QUFDRCxVQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDL0IsVUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLFVBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNiLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO01BQ2pCOzs7WUFFYyx5QkFBQyxLQUFLLEVBQUU7QUFDdEIsVUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1VBQzFCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQ2hDLElBQUksQ0FBQyxVQUFBLENBQUM7Y0FBSSxDQUFDLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtPQUFBLENBQUMsQ0FBQztBQUN0QyxVQUFJLElBQUksRUFBRTtBQUdULGFBQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLGNBQU8sSUFBSSxDQUFDO09BQ1o7TUFDRDs7O1dBakNXLEdBQUc7OztrQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWUsIFBsYXllciwgQ2FyZCB9IGZyb20gJ2t5dS1jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuXHRcdHRoaXMuY3VycmVudFZpZXcgPSAnZ2FtZSc7XHJcblx0XHR3aW5kb3cucGxheWVyMSA9IHRoaXMucGxheWVyMSA9IFBsYXllci5uZXcoJ1BsYXllciAxJyk7XHJcblx0XHR0aGlzLnBsYXllcjIgPSBQbGF5ZXIubmV3KCdQbGF5ZXIgMicpO1xyXG5cdFx0dGhpcy5uZXdHYW1lKCk7IC8vIHRoaXMuY3VycmVudFZpZXcgPSAnc3RhcnQnOyBcclxuXHR9XHJcblxyXG5cdG5ld0dhbWUoKSB7XHJcblx0XHR2YXIgZ2FtZSA9IEdhbWUubmV3KCksXHJcblx0XHRcdHAxID0gdGhpcy5wbGF5ZXIxLFxyXG5cdFx0XHRwMiA9IHRoaXMucGxheWVyMjtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcblx0XHRcdHAxLmNhcmRzLnB1c2goQ2FyZC5yYW5kb20oKSk7XHJcblx0XHRcdHAyLmNhcmRzLnB1c2goQ2FyZC5yYW5kb20oKSk7XHJcblx0XHR9XHJcblx0XHRnYW1lLmFkZChwMSwgcDEuY2FyZHMuc2xpY2UoKSk7XHJcblx0XHRnYW1lLmFkZChwMiwgcDIuY2FyZHMuc2xpY2UoKSk7XHJcblx0XHRnYW1lLnN0YXJ0KCk7XHJcblx0XHR0aGlzLmdhbWUgPSBnYW1lO1xyXG5cdH1cclxuXHJcblx0b25DYXJkRHJhZ3N0YXJ0KGV2ZW50KSB7XHJcblx0XHR2YXIgcGxheWVyID0gdGhpcy5nYW1lLnR1cm4sXHJcblx0XHRcdGNhcmQgPSB0aGlzLmdhbWUuaGFuZHMuZ2V0KHBsYXllcilcclxuXHRcdFx0XHQuZmluZChjID0+IGMuaWQgPT0gZXZlbnQudGFyZ2V0LmlkKTtcclxuXHRcdGlmIChjYXJkKSB7XHJcblxyXG5cdFx0XHQvLyBUT0RPIGZpeFxyXG5cdFx0XHR3aW5kb3cuY2FyZEluUGxheSA9IGNhcmQ7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==