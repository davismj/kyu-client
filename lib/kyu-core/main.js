(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.kyuCore = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _KyuBoard = require('./board');

Object.defineProperty(exports, 'KyuBoard', {
  enumerable: true,
  get: function get() {
    return _KyuBoard.KyuBoard;
  }
});

var _Card = require('./card');

Object.defineProperty(exports, 'Card', {
  enumerable: true,
  get: function get() {
    return _Card.Card;
  }
});

var _Game = require('./game');

Object.defineProperty(exports, 'Game', {
  enumerable: true,
  get: function get() {
    return _Game.Game;
  }
});

var _Player = require('./player');

Object.defineProperty(exports, 'Player', {
  enumerable: true,
  get: function get() {
    return _Player.Player;
  }
});

},{"./board":2,"./card":3,"./game":4,"./player":5}],2:[function(require,module,exports){
"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Board = (function (_Array) {
	function Board(height, width) {
		_classCallCheck(this, Board);

		var _this = new _Array(height * width);

		_this.__proto__ = Board.prototype;

		_this.height = height;
		_this.width = width;
		_this.length = height * width;
		_this.fill(null);
		_this.minHand = Math.ceil(_this.length / 2);
		return _this;
	}

	_inherits(Board, _Array);

	_createClass(Board, [{
		key: "empty",
		value: function empty() {
			this.fill(null);
		}
	}]);

	return Board;
})(Array);

exports.Board = Board;

var KyuBoard = (function (_Board) {
	function KyuBoard() {
		_classCallCheck(this, KyuBoard);

		_get(Object.getPrototypeOf(KyuBoard.prototype), "constructor", this).call(this, 3, 3);
	}

	_inherits(KyuBoard, _Board);

	return KyuBoard;
})(Board);

exports.KyuBoard = KyuBoard;

},{}],3:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
	value: true
});

var Card = (function () {
	function Card(values) {
		_classCallCheck(this, Card);

		this.id = Guid();
		this.top = values.top;
		this.right = values.right;
		this.bottom = values.bottom;
		this.left = values.left;
	}

	_createClass(Card, [{
		key: 'toString',
		value: function toString() {
			return '(' + this.top + ', ' + this.right + ', ' + this.bottom + ', ' + this.left + ')';
		}
	}], [{
		key: 'random',
		value: function random() {
			var c = new Card({
				top: Math.round(Math.random() * 10) + 1,
				right: Math.round(Math.random() * 10) + 1,
				bottom: Math.round(Math.random() * 10) + 1,
				left: Math.round(Math.random() * 10) + 1
			});
			console.log('Random card generated: ' + c + '.');
			return c;
		}
	}]);

	return Card;
})();

exports.Card = Card;

function Guid() {
	return Guid.s4() + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + Guid.s4() + Guid.s4();
}
Guid.s4 = function () {
	return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
};

},{}],4:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _Board = require('./board');

var Game = (function () {
	function Game() {
		var rules = arguments[0] === undefined ? [Rules.ADJACENT] : arguments[0];

		_classCallCheck(this, Game);

		this.players = new Set();
		this.hands = new Map();
		this.board = new _Board.Board(3, 3);
		this.rules = rules;
		this.status = GameStatus.NEW;
		this.turn = null;
		this.winner = null;
	}

	_createClass(Game, [{
		key: 'initialize',
		value: function initialize() {
			this.players.clear();
			this.hands.clear();
			this.board.empty();
			this.status = GameStatus.NEW;
			this.turn = null;
			this.winner = null;
		}
	}, {
		key: 'add',
		value: function add(player, hand) {
			if (player.canJoin(this) && player.canUse(hand)) {

				this.players.add(player);
				this.hands.set(player, hand.map(function (card) {
					var cardIndex = player.cards.indexOf(card);
					return player.cards.splice(cardIndex, 1)[0];
				}));
			}
		}
	}, {
		key: 'canStart',
		value: function canStart() {
			return this.status != GameStatus.SARTED && this.players.size == 2 && this.hands.size == 2 && this.hands.values().all(function (h) {
				return h.length == 5;
			});
		}
	}, {
		key: 'start',
		value: function start() {
			var turn = arguments[0] === undefined ? this.players.values().next().value : arguments[0];

			this.turn = turn;
			this.status = GameStatus.STARTED;
			console.log('Game started.');
		}
	}, {
		key: 'end',
		value: function end() {
			var players = this.players.values(),
			    p1 = players.next().value,
			    p2 = players.next().value,
			    p1Score = this.hands.get(p1).length,
			    p2Score = this.hands.get(p2).length;

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.board[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var card = _step.value;

					if (card.owner == p1) {
						p1Score++;
					} else if (card.owner == p2) {
						p2Score++;
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator['return']) {
						_iterator['return']();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			if (p1Score > p2Score) {
				this.winner = p1;
			} else if (p2Score > p1Score) {
				this.winner = p2;
			}

			this.status = GameStatus.ENDED;
		}
	}, {
		key: 'canPlay',
		value: function canPlay(player, card, position) {

			var hand = this.hands.get(player);

			return player == this.turn && !!card && hand.includes(card) && !this.board[position];
		}
	}, {
		key: 'play',
		value: function play(player, card, position) {
			if (!this.canPlay(player, card, position)) {
				return console.warn('This play is invalid.');
			}

			var hand = this.hands.get(player),
			    cardIndex = hand.indexOf(card);

			this.board.splice(position, 1, hand.splice(cardIndex, 1)[0]);

			this.board[position].owner = player;
			Rules.apply(this, player, position);

			this.nextTurn();
		}
	}, {
		key: 'nextTurn',
		value: function nextTurn() {
			if (this.board.every(function (s) {
				return s;
			})) {
				return this.end();
			}

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = this.players[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var player = _step2.value;

					if (this.turn != player) {
						this.turn = player;
						return;
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2['return']) {
						_iterator2['return']();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}
	}], [{
		key: 'new',
		value: function _new() {
			var game = new Game();

			return game;
		}
	}]);

	return Game;
})();

exports.Game = Game;

var Rules = (function () {
	function Rules() {
		_classCallCheck(this, Rules);
	}

	_createClass(Rules, null, [{
		key: 'ADJACENT',
		value: 'adjacent',
		enumerable: true
	}, {
		key: 'apply',
		value: function apply(game, player, position) {
			var won = arguments[3] === undefined ? [] : arguments[3];

			var center = game.board[position];

			if (game.rules.includes(Rules.ADJACENT)) {

				var above = game.board[position - 3],
				    right = game.board[position + 1],
				    below = game.board[position + 3],
				    left = game.board[position - 1];

				if (above && above.owner != player) {
					if (above.bottom < center.top) {
						won.push(above);
					}
				}

				if (right && right.owner != player) {
					if (right.left < center.right) {
						won.push(right);
					}
				}

				if (below && below.owner != player) {
					if (below.top < center.bottom) {
						won.push(below);
					}
				}

				if (left && left.owner != player) {
					if (left.right < center.left) {
						won.push(left);
					}
				}
			}

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {

				for (var _iterator3 = won[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var card = _step3.value;

					if (game.rules.includes(Rules.CHAIN)) {
						var cardPos = game.board.indexOf(card);
						Rules.apply(game, player, cardPos, won);
					}

					card.owner = player;
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3['return']) {
						_iterator3['return']();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		}
	}]);

	return Rules;
})();

var GameStatus = (function () {
	function GameStatus() {
		_classCallCheck(this, GameStatus);
	}

	_createClass(GameStatus, null, [{
		key: 'NEW',
		value: 'new',
		enumerable: true
	}, {
		key: 'STARTED',
		value: 'started',
		enumerable: true
	}, {
		key: 'ENDED',
		value: 'ended',
		enumerable: true
	}]);

	return GameStatus;
})();

},{"./board":2}],5:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Player = (function () {
	function Player() {
		var player = arguments[0] === undefined ? {} : arguments[0];

		_classCallCheck(this, Player);

		this.name = player.name;
		this.cards = player.cards || [];
	}

	_createClass(Player, [{
		key: "toString",
		value: function toString() {
			return this.name || "Anonymous player";
		}
	}, {
		key: "initialize",
		value: function initialize() {
			this.cards.splice(0, Number.MAX_VALUE);
			this.name = null;
		}
	}, {
		key: "canJoin",
		value: function canJoin(game) {
			return this.cards.length >= game.board.minHand;
		}
	}, {
		key: "canUse",
		value: function canUse(cardOrHand) {
			var _this = this;

			if (cardOrHand.length) {
				var hand = cardOrHand;
				return hand.length == 5 && hand.every(function (card) {
					return _this.canUse(card);
				});
			}
			var card = cardOrHand;

			return this.cards.some(function (c) {
				return c == card;
			});
		}
	}], [{
		key: "new",
		value: function _new() {
			var name = arguments[0] === undefined ? "" : arguments[0];

			var player = new Player();
			player.name = name;

			return player;
		}
	}]);

	return Player;
})();

exports.Player = Player;

},{}]},{},[1])(1)
});