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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzJFQUVhLEdBQUc7Ozs7NEJBRlAsSUFBSTs4QkFBRSxNQUFNO3NDQUFFLGNBQWM7NEJBQUUsSUFBSTs7Ozs7Ozs7O0FBRTlCLGVBQUc7QUFFRCx5QkFGRixHQUFHLEdBRUU7MENBRkwsR0FBRzs7QUFHUix3QkFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDM0Isd0JBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxPQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3pDOzs2QkFMUSxHQUFHOzsyQkFPTCxtQkFBRztBQUNOLDRCQUFJLElBQUksR0FBRyxJQUFJLE9BQUksRUFBRTs0QkFDakIsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPOzRCQUNqQixFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLE9BQUksRUFBRSxDQUFDO0FBQzdDLDZCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3hCLDhCQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzt5QkFDaEM7QUFDRCw0QkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLDRCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUM5Qiw0QkFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztBQUViLDRCQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQiw0QkFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7cUJBQzdCOzs7MkJBRWMseUJBQUMsS0FBSyxFQUFFO0FBQ25CLDRCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7NEJBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQzdCLElBQUksQ0FBQyxVQUFBLENBQUM7bUNBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7eUJBQUEsQ0FBQyxDQUFDO0FBQzVDLDRCQUFJLElBQUksRUFBRTtBQUdOLGtDQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN6QixtQ0FBTyxJQUFJLENBQUM7eUJBQ2Y7cUJBQ0o7Ozt1QkFoQ1EsR0FBRzs7OzJCQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZSwgUGxheWVyLCBDb21wdXRlclBsYXllciwgQ2FyZCB9IGZyb20gJ2t5dS1jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9ICdzdGFydCc7IFxyXG4gICAgICAgIHRoaXMucGxheWVyMSA9IFBsYXllci5uZXcoJ1BsYXllciAxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3R2FtZSgpIHtcclxuICAgICAgICB2YXIgZ2FtZSA9IEdhbWUubmV3KCksXHJcbiAgICAgICAgICAgIHAxID0gdGhpcy5wbGF5ZXIxLFxyXG4gICAgICAgICAgICBwMiA9IHRoaXMucGxheWVyMiA9IENvbXB1dGVyUGxheWVyLm5ldygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHAxLmNhcmRzLnB1c2goQ2FyZC5yYW5kb20oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWUuYWRkKHAxLCBwMS5jYXJkcy5zbGljZSgpKTtcclxuICAgICAgICBnYW1lLmFkZChwMiwgcDIuY2hvb3NlSGFuZCgpKTtcclxuICAgICAgICBnYW1lLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9ICdnYW1lJztcclxuICAgIH1cclxuXHJcbiAgICBvbkNhcmREcmFnc3RhcnQoZXZlbnQpIHtcclxuICAgICAgICB2YXIgcGxheWVyID0gdGhpcy5nYW1lLnR1cm4sXHJcbiAgICAgICAgICAgIGNhcmQgPSB0aGlzLmdhbWUuaGFuZHMuZ2V0KHBsYXllcilcclxuICAgICAgICAgICAgICAgIC5maW5kKGMgPT4gYy5pZCA9PSBldmVudC50YXJnZXQuaWQpO1xyXG4gICAgICAgIGlmIChjYXJkKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPIGZpeFxyXG4gICAgICAgICAgICB3aW5kb3cuY2FyZEluUGxheSA9IGNhcmQ7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==