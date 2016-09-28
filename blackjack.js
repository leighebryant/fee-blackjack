function runGame() {

    var cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var display = document.querySelector('figure');

    function hit() {

        var card = (Math.floor(Math.random() * cards.length));
        display.innerHTML = cards[card];
        checkResult(false, true);
    }
    /**
     * Check the result of the current cards and alert the game result
     *
     * @param  {Boolean} standing  Whether or not the player is standing
     * @param  {Boolean} hitting   Whether or not the player is hitting
     * @return {void}
     */


    function checkResult(standing, hitting) {
        // cards = display.innerHTML.split(' ');

        var cardValue = 0;

        cards.forEach(function(card) {
            if (card === 'J' || card === 'Q' || card === 'K')
                cardValue = cardValue + 10;

            else if (card === 'A') {
                cardValue = cardValue + 11;
            }
            else {
                card = Number(card);
                cardValue = cardValue + card;
            }
        });

        if (cardValue <= 15 && standing) {
            alert('Dealer wins.');
        }
        if (cardValue <= 18 && standing) {
            alert('Push!');
        }
        if (cardValue > 21) {
            alert('You Bust.');
        }
        if (cardValue > 18 && hitting || cardValue === 21) {
            alert('You win!');
        }


        display.innerHTML = ' ';
        card = (Math.round(Math.random() * cards.length));
        display.innerHTML = cards[card];
    }

    document.getElementById('stand').addEventListener('click', function(){checkResult(true, false);
    });

    document.getElementById('hit').addEventListener('click', function(){hit();
    });
    checkResult();

    // card = (Math.floor(Math.random() * cards.length));
    // display.innerHTML = cards[card];

    var card = (Math.floor(Math.random() * cards.length));
    display.innerHTML = display.innerHTML + ' ' + cards[card];
}
runGame();
