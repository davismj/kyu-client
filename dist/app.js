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

					this.currentView = 'start';
					this.player1 = Player['new']('Player 1');
				}

				_createClass(App, [{
					key: 'newGame',
					value: function newGame() {
						var game = Game['new'](),
						    p1 = this.player1,
						    p2 = this.player2 = Player['new']('Player 2');
						for (var i = 0; i < 5; i++) {
							p1.cards.push(Card.random());
							p2.cards.push(Card.random());
						}
						game.add(p1, p1.cards.slice());
						game.add(p2, p2.cards.slice());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3dEQUVhLEdBQUc7Ozs7bUJBRlAsSUFBSTtxQkFBRSxNQUFNO21CQUFFLElBQUk7Ozs7Ozs7OztBQUVkLE1BQUc7QUFFSixhQUZDLEdBQUcsR0FFRDsyQkFGRixHQUFHOztBQUdkLFNBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO0FBQzNCLFNBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxPQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDdEM7O2lCQUxXLEdBQUc7O1lBT1IsbUJBQUc7QUFDVCxVQUFJLElBQUksR0FBRyxJQUFJLE9BQUksRUFBRTtVQUNwQixFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87VUFDakIsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxPQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUMsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMzQixTQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUM3QixTQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztPQUM3QjtBQUNELFVBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUMvQixVQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDL0IsVUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztBQUViLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFVBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO01BQzFCOzs7WUFFYyx5QkFBQyxLQUFLLEVBQUU7QUFDdEIsVUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1VBQzFCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQ2hDLElBQUksQ0FBQyxVQUFBLENBQUM7Y0FBSSxDQUFDLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtPQUFBLENBQUMsQ0FBQztBQUN0QyxVQUFJLElBQUksRUFBRTtBQUdULGFBQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLGNBQU8sSUFBSSxDQUFDO09BQ1o7TUFDRDs7O1dBakNXLEdBQUc7OztrQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWUsIFBsYXllciwgQ2FyZCB9IGZyb20gJ2t5dS1jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuXHRcdHRoaXMuY3VycmVudFZpZXcgPSAnc3RhcnQnOyBcclxuXHRcdHRoaXMucGxheWVyMSA9IFBsYXllci5uZXcoJ1BsYXllciAxJyk7XHJcblx0fVxyXG5cclxuXHRuZXdHYW1lKCkge1xyXG5cdFx0dmFyIGdhbWUgPSBHYW1lLm5ldygpLFxyXG5cdFx0XHRwMSA9IHRoaXMucGxheWVyMSxcclxuXHRcdFx0cDIgPSB0aGlzLnBsYXllcjIgPSBQbGF5ZXIubmV3KCdQbGF5ZXIgMicpO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuXHRcdFx0cDEuY2FyZHMucHVzaChDYXJkLnJhbmRvbSgpKTtcclxuXHRcdFx0cDIuY2FyZHMucHVzaChDYXJkLnJhbmRvbSgpKTtcclxuXHRcdH1cclxuXHRcdGdhbWUuYWRkKHAxLCBwMS5jYXJkcy5zbGljZSgpKTtcclxuXHRcdGdhbWUuYWRkKHAyLCBwMi5jYXJkcy5zbGljZSgpKTtcclxuXHRcdGdhbWUuc3RhcnQoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5nYW1lID0gZ2FtZTtcclxuXHRcdHRoaXMuY3VycmVudFZpZXcgPSAnZ2FtZSc7XHJcblx0fVxyXG5cclxuXHRvbkNhcmREcmFnc3RhcnQoZXZlbnQpIHtcclxuXHRcdHZhciBwbGF5ZXIgPSB0aGlzLmdhbWUudHVybixcclxuXHRcdFx0Y2FyZCA9IHRoaXMuZ2FtZS5oYW5kcy5nZXQocGxheWVyKVxyXG5cdFx0XHRcdC5maW5kKGMgPT4gYy5pZCA9PSBldmVudC50YXJnZXQuaWQpO1xyXG5cdFx0aWYgKGNhcmQpIHtcclxuXHJcblx0XHRcdC8vIFRPRE8gZml4XHJcblx0XHRcdHdpbmRvdy5jYXJkSW5QbGF5ID0gY2FyZDtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9