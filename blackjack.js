function runGame() {

    var cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var display = document.querySelector('figure');

    function hit() {

        var card = (Math.floor(Math.random() * cards.length));
        display.innerHTML = display.innerHTML + ' ' + cards[card];
        checkResult(false);
    }
    /**
     * Check the result of the current cards and alert the game result
     *
     * @param  {Boolean} standing  Whether or not the player is standing
     * @param  {Boolean} hitting   Whether or not the player is hitting
     * @return {void}
     */


    function checkResult(standing) {
        var hand = display.innerHTML.split(' ');

        var cardValue = 0;

        hand.forEach(function(card, i) {
          if (Number(card)) {
              cardValue = cardValue + Number(card);
          }
          if (card === 'J' || card === 'Q' || card === 'K'){
                cardValue = cardValue + 10;}

          if (card === 'A') {
                cardValue = cardValue + 11;}
        });

        if (cardValue <= 15 && standing) {
            alert('Dealer wins.');
        }
        else if (cardValue <= 18 && standing) {
            alert('Push!');
        }
        if (cardValue > 21) {
            alert('You Bust.');
        }
        else if (cardValue > 18 && standing || cardValue === 21) {
            alert('You win!');
        }


        display.innerHTML = display.innerHTML;
        card = (Math.round(Math.random() * cards.length));
        // display.innerHTML = cards[card];
    }

    document.getElementById('stand').addEventListener('click', function(){checkResult(true);
    });

    document.getElementById('hit').addEventListener('click', function(){hit();
    });
    checkResult(false);

    card = (Math.floor(Math.random() * cards.length));
    display.innerHTML = cards[card];

    card = (Math.floor(Math.random() * cards.length));
    display.innerHTML = display.innerHTML + ' ' + cards[card];
}
runGame();
