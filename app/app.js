import { Game, Player, ComputerPlayer, Card } from 'kyu-core';

export class App {
    
    constructor() { 
        this.currentView = 'start'; 
        this.player1 = Player.new('Player 1');
        var socket = io.connect('http://localhost:8088');
        socket.on('news', function(data) {
            console.log(data);
        });
        document.addEventListener('touchmove', e => e.preventDefault());
    }

    newGame() {
        var game = Game.new(),
            p1 = this.player1,
            p2 = this.player2 = ComputerPlayer.new();
        for (let i = 0; i < 5; i++) {
            p1.cards.push(Card.random());
        }
        game.add(p1, p1.cards.slice());
        game.add(p2, p2.chooseHand());
        game.start();

        this.game = game;
        this.currentView = 'game';
    }

    getPlay(space) {
    }

    onMousedown(event) {

        var player = this.game.turn,
            element = event.target,
            card = this.game.hands.get(player).find(c => c.id == element.id);

        if (card) {
            var onMousemove = event => {
                element.style.pointerEvents = 'none';
                element.style.opacity = 0.9;
                element.style.position = 'fixed';
                element.style.left = event.pageX-40 + 'px';
                element.style.top = event.pageY-50 + 'px';

                var space = document
                    .elementFromPoint(event.pageX, event.pageY)
                    .closest('td');
                if (space) { 
                    space.classList.add('success');
                }
                var spaces = document.querySelectorAll('td.success');
                Array.prototype.forEach.call(spaces, function(el, i){
                    if (el != space) {
                        el.classList.remove('success');    
                    }
                });
            };
            var onTouchmove = event => { 
                onMousemove(event.touches[0]);
                event.preventDefault();
            };
            var onMouseup = event => {
                var space = document.querySelector('.success');
                if (space) {
                    var position = parseInt(space.getAttribute('data-pos'));
                    
                    // if the current player can play the card at the position
                    if (this.game.canPlay(player, card, position)) {

                        // then play the card at the position
                        this.game.play(player, card, position);
                    }

                    // otherwise reset the ui
                    space.classList.remove('success');
                }

                element.style.left = 0;
                element.style.top = 0;
                element.style.position = 'relative';
                element.style.opacity = 1.0;
                element.style.pointerEvents = 'initial';
                document.removeEventListener('mousemove', onMousemove);
                document.removeEventListener('touchmove', onTouchmove);
                document.removeEventListener('mouseup', onMouseup);
                document.removeEventListener('touchend', onTouchend);
            };
            var onTouchend = event => {
                onMouseup(event.touches[0]);
                event.preventDefault();
            };
            document.addEventListener('mousemove', onMousemove);
            document.addEventListener('touchmove', onTouchmove);
            document.addEventListener('mouseup', onMouseup);
            document.addEventListener('touchend', onTouchend);
        }
    }
    onTouchstart(event) {
        this.onMousedown(event.touches[0]);
        return true;
    }
}
