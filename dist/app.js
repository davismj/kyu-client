System.register(["aurelia-framework", "kyu-core"], function (_export) {
  "use strict";

  var Metadata, Card, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaFramework) {
      Metadata = _aureliaFramework.Metadata;
    }, function (_kyuCore) {
      Card = _kyuCore.Card;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App() {
          _classCallCheck(this, App);

          this.currentView = "start";
        }

        _prototypeProperties(App, {
          metadata: {
            value: function metadata() {
              return Metadata.singleton();
            },
            writable: true,
            configurable: true
          }
        }, {
          startGame: {
            value: function startGame() {
              this.currentView = "game";
              this.player2 = { hand: [] };
              this.player1 = { hand: [] };
              for (var i = 0; i < 5; i++) {
                this.player1.hand.push(Card.random());
                this.player2.hand.push(Card.random());
              }
            },
            writable: true,
            configurable: true
          },
          dragstart: {
            value: function dragstart() {
              console.log(this.$event);
            },
            writable: true,
            configurable: true
          },
          dragover: {
            value: function dragover() {
              var target = this.$event.currentTarget;
              target.style.background = "red";
            },
            writable: true,
            configurable: true
          },
          dragleave: {
            value: function dragleave() {
              var target = this.$event.currentTarget;
              target.style.background = "";
            },
            writable: true,
            configurable: true
          },
          drop: {
            value: function drop() {
              var target = this.$event.currentTarget,
                  card = this.$event.dataTransfer.getData("card");
              card.remove();
              target.appendChild(card);
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUyxRQUFRLEVBQ1IsSUFBSSx5Q0FDQSxHQUFHOzs7QUFGUCxjQUFRLHFCQUFSLFFBQVE7O0FBQ1IsVUFBSSxZQUFKLElBQUk7Ozs7Ozs7QUFDQSxTQUFHO0FBRUosaUJBRkMsR0FBRztnQ0FBSCxHQUFHOztBQUdkLGNBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1NBQzNCOzs2QkFKVyxHQUFHO0FBQ1Isa0JBQVE7bUJBQUEsb0JBQUc7QUFBRSxxQkFBTyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7YUFBRTs7Ozs7QUFJbEQsbUJBQVM7bUJBQUEscUJBQUc7QUFDWCxrQkFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7QUFDMUIsa0JBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDNUIsa0JBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDNUIsbUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDM0Isb0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN0QyxvQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2VBQ3RDO2FBQ0Q7Ozs7QUFDRCxtQkFBUzttQkFBQSxxQkFBRztBQUNYLHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6Qjs7OztBQUNELGtCQUFRO21CQUFBLG9CQUFHO0FBQ1Ysa0JBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0FBQ3ZDLG9CQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDaEM7Ozs7QUFDRCxtQkFBUzttQkFBQSxxQkFBRztBQUNYLGtCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztBQUN2QyxvQkFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO2FBQzdCOzs7O0FBQ0QsY0FBSTttQkFBQSxnQkFBRztBQUNOLGtCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWE7a0JBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakQsa0JBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNkLG9CQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCOzs7Ozs7ZUE5QlcsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL2FwcC8ifQ==