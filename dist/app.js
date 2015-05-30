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

            Element.prototype.closest = function closest(sel) {
                if (this.matches(sel)) {
                    return this;
                }if (this.parentElement) {
                    return this.parentElement.closest(sel);
                }
            };

            App = (function () {
                function App() {
                    _classCallCheck(this, App);

                    this.currentView = 'start';
                    this.player1 = Player['new']('Player 1');
                    document.addEventListener('touchmove', function (e) {
                        return e.preventDefault();
                    });
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

                        this.game.status = 'ended';
                    }
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
                                try {
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
                                } catch (err) {
                                    alert(err);
                                }
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
//# sourceMappingURL=data:application/json;base64,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QWdCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELG9DQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO3lCQUNyRDtxQkFDSjs7OzJCQUNXLHNCQUFDLEtBQUssRUFBRTtBQUNoQiw0QkFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsK0JBQU8sSUFBSSxDQUFDO3FCQUNmOzs7dUJBbkdRLEdBQUc7OzsyQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWUsIFBsYXllciwgQ29tcHV0ZXJQbGF5ZXIsIENhcmQgfSBmcm9tICdreXUtY29yZSc7XHJcblxyXG5FbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gLy9FbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0IHx8XHJcbiAgICBmdW5jdGlvbiBjbG9zZXN0KHNlbCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoZXMoc2VsKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50RWxlbWVudCkgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQuY2xvc2VzdChzZWwpO1xyXG4gICAgfVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gJ3N0YXJ0JzsgXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gUGxheWVyLm5ldygnUGxheWVyIDEnKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3R2FtZSgpIHtcclxuICAgICAgICB2YXIgZ2FtZSA9IEdhbWUubmV3KCksXHJcbiAgICAgICAgICAgIHAxID0gdGhpcy5wbGF5ZXIxLFxyXG4gICAgICAgICAgICBwMiA9IHRoaXMucGxheWVyMiA9IENvbXB1dGVyUGxheWVyLm5ldygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHAxLmNhcmRzLnB1c2goQ2FyZC5yYW5kb20oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWUuYWRkKHAxLCBwMS5jYXJkcy5zbGljZSgpKTtcclxuICAgICAgICBnYW1lLmFkZChwMiwgcDIuY2hvb3NlSGFuZCgpKTtcclxuICAgICAgICBnYW1lLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9ICdnYW1lJztcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YXR1cyA9ICdlbmRlZCdcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlZG93bihldmVudCkge1xyXG5cclxuICAgICAgICB2YXIgcGxheWVyID0gdGhpcy5nYW1lLnR1cm4sXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBldmVudC50YXJnZXQsXHJcbiAgICAgICAgICAgIGNhcmQgPSB0aGlzLmdhbWUuaGFuZHMuZ2V0KHBsYXllcikuZmluZChjID0+IGMuaWQgPT0gZWxlbWVudC5pZCk7XHJcblxyXG4gICAgICAgIGlmIChjYXJkKSB7XHJcbiAgICAgICAgICAgIHZhciBvbk1vdXNlbW92ZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwLjk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGV2ZW50LnBhZ2VYLTQwICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gZXZlbnQucGFnZVktNTAgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzcGFjZSA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCd0ZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwYWNlKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzcGFjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZC5zdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNwYWNlcywgZnVuY3Rpb24oZWwsIGkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCAhPSBzcGFjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJyk7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfWNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgb25Ub3VjaG1vdmUgPSBldmVudCA9PiB7IFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZW1vdmUoZXZlbnQudG91Y2hlc1swXSk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgb25Nb3VzZXVwID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGFjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHBhcnNlSW50KHNwYWNlLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3MnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgcGxheWVyIGNhbiBwbGF5IHRoZSBjYXJkIGF0IHRoZSBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuY2FuUGxheShwbGF5ZXIsIGNhcmQsIHBvc2l0aW9uKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiBwbGF5IHRoZSBjYXJkIGF0IHRoZSBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUucGxheShwbGF5ZXIsIGNhcmQsIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSByZXNldCB0aGUgdWlcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gMDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMS4wO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2luaXRpYWwnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZW1vdmUpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaG1vdmUpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2V1cCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hlbmQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgb25Ub3VjaGVuZCA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIG9uTW91c2V1cChldmVudC50b3VjaGVzWzBdKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2Vtb3ZlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaG1vdmUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZXVwKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoZW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblRvdWNoc3RhcnQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLm9uTW91c2Vkb3duKGV2ZW50LnRvdWNoZXNbMF0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==