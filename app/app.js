import { Game, Player, ComputerPlayer, Card } from 'kyu-core';

export class App {
    
    constructor() { 
        this.currentView = 'start'; 
        this.player1 = Player.new('Player 1');
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
        this.cardInPlay = null;
        this.currentView = 'game';
    }

    onMousedown(event) {
        var player = this.game.turn,
            card = this.game.hands.get(player)
                .find(c => c.id == event.target.id);
        if (card) {
            this.cardInPlay = card;
            var onMousemove = e => {
                if (e.movementX || e.movementY) {
                    event.target.style.pointerEvents = 'none';
                    event.target.style.opacity = 0.9;
                    event.target.style.position = 'fixed';
                }
                event.target.style.left = e.pageX-40 + 'px';
                event.target.style.top = e.pageY-50 + 'px';
            };
            var onMouseup = e => {
                event.target.style.left = 0;
                event.target.style.top = 0;
                event.target.style.position = 'relative';
                event.target.style.opacity = 1.0;
                event.target.style.pointerEvents = 'initial';
                document.removeEventListener('mousemove', onMousemove);
                this.cardInPlay = null;
            };
            document.addEventListener('mousemove', onMousemove);
            document.addEventListener('touchmove', onMousemove)
            document.addEventListener('mouseup', onMouseup);
            document.addEventListener('touchend', onMouseup);
        }
    }
}