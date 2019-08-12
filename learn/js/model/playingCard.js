/**
 *
 * Created by Administrator on 14-8-15.
 */
(function(card){
    'use strict';
    var _validSuit,
        _rankStrings = ["?", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
            "J", "Q", "K"];
        ;

    function PlayingCard(){
        this.superClass = card.card;
        this.superClass = call(this);
        this.constructor = PlayingCard;
    }
    PlayingCard.prototype = Object.create(card.Card.prototype);

    var playingCardMethods = {

        contents: function(){
          return _rankStrings[this.rank()] + this.suit();
        },

        suit: function(v){
            if(v === undefined){
                return this._suit ? this._suit : "?";
            }else {
                if(PlayingCard.validSuits()[v]){
                    this._suit = v;
                }
                return this._suit;
            }
        },

        rank: function(v){
            if(v === undefined){
                return this._rank;
            } else{
                if(v <= PlayingCard.maxRank()){
                    this._rank = v;
                }
                return this._rank;
            }

        }

    };

    Object.keys(playingCardMethods).forEach(function(name){
        this[name] = playingCardMethods[name];
    }, PlayingCard.prototype);

    PlayingCard.maxRank = function(){
        return _rankStrings.length - 1;
    }

    PlayingCard.validSuits = function(){
        if(!_validSuit){
            _validSuit = { "♥": 1, "♦": 1, "♠": 1, "♣": 1 };
        }
        return _validSuit;
    }

    function exports(){
        return new PlayingCard();
    }

    exports.PlayingCard = PlayingCard;
    window.playingCard = exports;
})(window.card);
