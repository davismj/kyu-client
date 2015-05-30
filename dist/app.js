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
                    key: 'getPlay',
                    value: function getPlay(space) {}
                }, {
                    key: 'onMousedown',
                    value: function onMousedown(event) {
                        var _this = this;

                        var player = this.game.turn,
                            element = event.target,
                            card = this.game.hands.get(player).find(function (c) {
                            return c.id == element.id;
                        });

                        if (card) {
                            var onMousemove = function onMousemove(event) {
                                element.style.pointerEvents = 'none';
                                element.style.opacity = 0.9;
                                element.style.position = 'fixed';
                                element.style.left = event.pageX - 40 + 'px';
                                element.style.top = event.pageY - 50 + 'px';

                                var space = document.elementFromPoint(event.pageX, event.pageY).closest('td');
                                if (space) {
                                    space.classList.add('success');
                                }
                                var spaces = document.querySelectorAll('td.success');
                                Array.prototype.forEach.call(spaces, function (el, i) {
                                    if (el != space) {
                                        el.classList.remove('success');
                                    }
                                });
                            };
                            var onTouchmove = function onTouchmove(event) {
                                onMousemove(event.touches[0]);
                                event.preventDefault();
                            };
                            var onMouseup = (function (_onMouseup) {
                                function onMouseup(_x) {
                                    return _onMouseup.apply(this, arguments);
                                }

                                onMouseup.toString = function () {
                                    return _onMouseup.toString();
                                };

                                return onMouseup;
                            })(function (event) {
                                var space = document.querySelector('.success');
                                if (space) {
                                    var position = parseInt(space.getAttribute('data-pos'));

                                    if (_this.game.canPlay(player, card, position)) {
                                        _this.game.play(player, card, position);
                                    }

                                    space.classList.remove('success');
                                }

                                element.style.left = 0;
                                element.style.top = 0;
                                element.style.position = 'relative';
                                element.style.opacity = 1;
                                element.style.pointerEvents = 'initial';
                                document.removeEventListener('mousemove', onMousemove);
                                document.removeEventListener('touchmove', onTouchmove);
                                document.removeEventListener('mouseup', onMouseup);
                                document.removeEventListener('touchend', onTouchend);
                            });
                            var onTouchend = function onTouchend(event) {
                                onMouseup(event.touches[0]);
                                event.preventDefault();
                            };
                            document.addEventListener('mousemove', onMousemove);
                            document.addEventListener('touchmove', onTouchmove);
                            document.addEventListener('mouseup', onMouseup);
                            document.addEventListener('touchend', onTouchend);
                        }
                    }
                }, {
                    key: 'onTouchstart',
                    value: function onTouchstart(event) {
                        this.onMousedown(event.touches[0]);
                        return true;
                    }
                }]);

                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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QyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDdkQsd0NBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDdkQsd0NBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDbkQsd0NBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7NkJBQ3hELENBQUEsQ0FBQztBQUNGLGdDQUFJLFVBQVUsR0FBRyxvQkFBQSxLQUFLLEVBQUk7QUFDdEIseUNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIscUNBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzs2QkFDMUIsQ0FBQztBQUNGLG9DQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3BELG9DQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3BELG9DQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELG9DQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO3lCQUNyRDtxQkFDSjs7OzJCQUNXLHNCQUFDLEtBQUssRUFBRTtBQUNoQiw0QkFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsK0JBQU8sSUFBSSxDQUFDO3FCQUNmOzs7dUJBL0ZRLEdBQUc7OzsyQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWUsIFBsYXllciwgQ29tcHV0ZXJQbGF5ZXIsIENhcmQgfSBmcm9tICdreXUtY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSAnc3RhcnQnOyBcclxuICAgICAgICB0aGlzLnBsYXllcjEgPSBQbGF5ZXIubmV3KCdQbGF5ZXIgMScpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0dhbWUoKSB7XHJcbiAgICAgICAgdmFyIGdhbWUgPSBHYW1lLm5ldygpLFxyXG4gICAgICAgICAgICBwMSA9IHRoaXMucGxheWVyMSxcclxuICAgICAgICAgICAgcDIgPSB0aGlzLnBsYXllcjIgPSBDb21wdXRlclBsYXllci5uZXcoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICBwMS5jYXJkcy5wdXNoKENhcmQucmFuZG9tKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lLmFkZChwMSwgcDEuY2FyZHMuc2xpY2UoKSk7XHJcbiAgICAgICAgZ2FtZS5hZGQocDIsIHAyLmNob29zZUhhbmQoKSk7XHJcbiAgICAgICAgZ2FtZS5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSAnZ2FtZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheShzcGFjZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2Vkb3duKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBwbGF5ZXIgPSB0aGlzLmdhbWUudHVybixcclxuICAgICAgICAgICAgZWxlbWVudCA9IGV2ZW50LnRhcmdldCxcclxuICAgICAgICAgICAgY2FyZCA9IHRoaXMuZ2FtZS5oYW5kcy5nZXQocGxheWVyKS5maW5kKGMgPT4gYy5pZCA9PSBlbGVtZW50LmlkKTtcclxuXHJcbiAgICAgICAgaWYgKGNhcmQpIHtcclxuICAgICAgICAgICAgdmFyIG9uTW91c2Vtb3ZlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMC45O1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBldmVudC5wYWdlWC00MCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGV2ZW50LnBhZ2VZLTUwICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc3BhY2UgPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSlcclxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgndGQnKTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGFjZSkgeyBcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGQuc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzcGFjZXMsIGZ1bmN0aW9uKGVsLCBpKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWwgIT0gc3BhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycpOyAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIG9uVG91Y2htb3ZlID0gZXZlbnQgPT4geyBcclxuICAgICAgICAgICAgICAgIG9uTW91c2Vtb3ZlKGV2ZW50LnRvdWNoZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIG9uTW91c2V1cCA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBwYXJzZUludChzcGFjZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHBsYXllciBjYW4gcGxheSB0aGUgY2FyZCBhdCB0aGUgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lLmNhblBsYXkocGxheWVyLCBjYXJkLCBwb3NpdGlvbikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZW4gcGxheSB0aGUgY2FyZCBhdCB0aGUgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnBsYXkocGxheWVyLCBjYXJkLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgcmVzZXQgdGhlIHVpXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IDA7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDEuMDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdpbml0aWFsJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2Vtb3ZlKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2htb3ZlKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNldXApO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoZW5kKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIG9uVG91Y2hlbmQgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNldXAoZXZlbnQudG91Y2hlc1swXSk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlbW92ZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2htb3ZlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2V1cCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaGVuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Ub3VjaHN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5vbk1vdXNlZG93bihldmVudC50b3VjaGVzWzBdKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=