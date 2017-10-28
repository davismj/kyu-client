import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Game, Player, ComputerPlayer, Card, GameStatus } from 'kyu-core';
import { START_GAME } from './events.js';

@inject(EventAggregator)
export class AppViewModel {
  
  constructor(eventAggregator) { 
    this.state = {};
    this.navigate('start'); 
    this.configureMessages(eventAggregator);
    this.configureEvents();
  }

  configureMessages(messenger) {
    messenger.subscribe(START_GAME, (game) => {
      this.navigate('game', { game });
    });
    this.messenger = messenger;
  }

  configureEvents() {
    document.addEventListener('touchmove', (e) => e.preventDefault());
    document.addEventListener('mousedown', (e) => this.onMousedown(e));
    document.addEventListener('touchstart', (e) => this.onTouchstart(e));
  }

  navigate(view, state) {
    this.currentView = view;
    if (state) {
      Object.assign(this.state, state);
    }
  }

  onMousedown(event) {
    let game = this.state.game;
    if (!game || game.status !== GameStatus.PLAYING) {
      return;
    }

    let player = game.turn;
    let element = event.target;
    let hand = game.hands.get(player);
    let card = hand.find(c => c.id && c.id == element.id);

    if (card) {
      var onMousemove = event => {
        element.style.pointerEvents = 'none';
        element.style.opacity = 0.9;
        element.style.position = 'fixed';
        element.style.left = event.pageX-40 + 'px';
        element.style.top = event.pageY-50 + 'px';

        var space = document
          .elementFromPoint(event.pageX, event.pageY)
          .closest('.space');
        if (space) { 
          space.classList.add('success');
        }
        var spaces = document.querySelectorAll('.space.success');
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
          if (game.canPlay(player, card, position)) {

            // then play the card at the position
            game.play(player, card, position);
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
