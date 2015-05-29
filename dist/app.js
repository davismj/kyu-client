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
                        this.cardInPlay = null;
                        this.currentView = 'game';
                    }
                }, {
                    key: 'onMousedown',
                    value: function onMousedown(event) {
                        var _this = this;

                        var player = this.game.turn,
                            card = this.game.hands.get(player).find(function (c) {
                            return c.id == event.target.id;
                        });
                        if (card) {
                            this.cardInPlay = card;
                            var onMousemove = function onMousemove(e) {
                                if (e.movementX || e.movementY) {
                                    event.target.style.pointerEvents = 'none';
                                    event.target.style.opacity = 0.9;
                                    event.target.style.position = 'fixed';
                                }
                                event.target.style.left = e.pageX - 40 + 'px';
                                event.target.style.top = e.pageY - 50 + 'px';
                            };
                            var onMouseup = function onMouseup(e) {
                                event.target.style.left = 0;
                                event.target.style.top = 0;
                                event.target.style.position = 'relative';
                                event.target.style.opacity = 1;
                                event.target.style.pointerEvents = 'initial';
                                document.removeEventListener('mousemove', onMousemove);
                                _this.cardInPlay = null;
                            };
                            document.addEventListener('mousemove', onMousemove);
                            document.addEventListener('touchmove', onMousemove);
                            document.addEventListener('mouseup', onMouseup);
                            document.addEventListener('touchend', onMouseup);
                        }
                    }
                }]);

                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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QVUsQ0FBQztBQUN6QyxxQ0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUcsQ0FBQztBQUNqQyxxQ0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztBQUM3Qyx3Q0FBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN2RCxzQ0FBSyxVQUFVLEdBQUcsSUFBSSxDQUFDOzZCQUMxQixDQUFDO0FBQ0Ysb0NBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDcEQsb0NBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUE7QUFDbkQsb0NBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDaEQsb0NBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7eUJBQ3BEO3FCQUNKOzs7dUJBcERRLEdBQUc7OzsyQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWUsIFBsYXllciwgQ29tcHV0ZXJQbGF5ZXIsIENhcmQgfSBmcm9tICdreXUtY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSAnc3RhcnQnOyBcclxuICAgICAgICB0aGlzLnBsYXllcjEgPSBQbGF5ZXIubmV3KCdQbGF5ZXIgMScpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0dhbWUoKSB7XHJcbiAgICAgICAgdmFyIGdhbWUgPSBHYW1lLm5ldygpLFxyXG4gICAgICAgICAgICBwMSA9IHRoaXMucGxheWVyMSxcclxuICAgICAgICAgICAgcDIgPSB0aGlzLnBsYXllcjIgPSBDb21wdXRlclBsYXllci5uZXcoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICBwMS5jYXJkcy5wdXNoKENhcmQucmFuZG9tKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lLmFkZChwMSwgcDEuY2FyZHMuc2xpY2UoKSk7XHJcbiAgICAgICAgZ2FtZS5hZGQocDIsIHAyLmNob29zZUhhbmQoKSk7XHJcbiAgICAgICAgZ2FtZS5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYXJkSW5QbGF5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gJ2dhbWUnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2Vkb3duKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHBsYXllciA9IHRoaXMuZ2FtZS50dXJuLFxyXG4gICAgICAgICAgICBjYXJkID0gdGhpcy5nYW1lLmhhbmRzLmdldChwbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICAuZmluZChjID0+IGMuaWQgPT0gZXZlbnQudGFyZ2V0LmlkKTtcclxuICAgICAgICBpZiAoY2FyZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRJblBsYXkgPSBjYXJkO1xyXG4gICAgICAgICAgICB2YXIgb25Nb3VzZW1vdmUgPSBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLm1vdmVtZW50WCB8fCBlLm1vdmVtZW50WSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5vcGFjaXR5ID0gMC45O1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUubGVmdCA9IGUucGFnZVgtNDAgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLnRvcCA9IGUucGFnZVktNTAgKyAncHgnO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgb25Nb3VzZXVwID0gZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUubGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUudG9wID0gMDtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUub3BhY2l0eSA9IDEuMDtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2luaXRpYWwnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZW1vdmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkSW5QbGF5ID0gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZW1vdmUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvbk1vdXNlbW92ZSlcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2V1cCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Nb3VzZXVwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=