import { Game, Player, ComputerPlayer, Card } from 'kyu-core';
import config from 'config';

export class App {

  currentView;
  game;
  player1;
  player2;
  
  constructor() { 
    this.currentView = 'start'; 

    // create player and game
    this.game = Game.new();
    this.player1 = Player.new({ name: 'Player 1' });
  }

  activate() {
    
    // pull the query string
    var match = location.search.match(/game=([a-zA-Z0-9]+)/);
    if (match) {
      this.goOnline();
      this.socket.emit('joinGame', match[1]);
    }

    document.addEventListener('touchmove', e => e.preventDefault()); // TODO fix
  }

  goOnline() {
    if (!this.socket) {
      this.socket = io.connect(config.socketServer);

      this.socket.on('gameCreated', (game) => {
        console.log('gameCreated', game);
        game = new Game(game);
        this.game.id = game.id;
        this.player1.id = game.players[0].id;
        this.game.addPlayer(this.player1);
        this.currentView = 'game';

        prompt(
          'Please copy this link. Please?',
          'http://playkyu.com/?game=' + game.id
        );
      });

      this.socket.on('gameJoined', (game) => { 
        console.log('gameJoined', game);
        game = new Game(game);
        this.game.id = game.id;
        this.player1.id = game.players[1].id;
        this.player2 = new Player(game.players[0]);
        this.game.addPlayer(this.player1);
        this.game.addPlayer(this.player2);
        this.currentView = 'game';
      });

      this.socket.on('playerJoined', (player) => {
        console.log('playerJoined', player);
        this.player2 = new Player(player);
        this.game.addPlayer(this.player2);
      });

      this.socket.on('gameStarted', (game) => {
        console.log('gameStarted', game);
        game = new Game(game);
        for (let hand of game.hands) {
          if (hand[0].id == this.player1.id) { 
            this.game.useHand(this.player1, hand[1]);
          } else {
            this.game.useHand(this.player2, hand[1]);
          }
        }
        let turn = Array.from(this.game.players).find(p => p.id == game.turn.id);
        this.game.start(turn);
      });

      this.socket.on('playMade', (playerId, cardId, location) => {
        let player = this.game.getPlayer(playerId);
        let card = this.game.hands.get(player).find(c => c.id == cardId);
        console.log('playMade', player, card, location)
        this.game.play(player, card, location);
      });
    }
  }

  newGame(mode) {

    // play online
    if (mode == 'online') {
      this.goOnline();
      this.socket.emit('createGame');

    // quickplay
    } else { 
      var game = this.game,
        p1 = this.player1,
        p2 = this.player2 = ComputerPlayer.new();
      for (let i = 0; i < 5; i++) {
        p1.cards.push(Card.random());
      }
      game.add(p1, p1.cards);
      game.add(p2, p2.chooseHand());
      game.start();

      this.game = game;
      this.currentView = 'game';
    }
  }

  get player1sHand() {
    return this.game.hands.get(this.player1);
  }
  get player2sHand() {
    return this.game.hands.get(this.player2);
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

            if (this.socket) { 
              this.socket.emit('makePlay', this.game.id, player.id, card.id, position);
              console.log('makePlay', this.game.id, player.id, card.id, position);
            }
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
