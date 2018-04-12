let openCards = []; // openCards array contains selected cards.

const matchedCards = document.getElementsByClassName("match"); // variable for number of matched cards.

const cards = document.querySelectorAll('.card'); // variable for selecting cards.

let deck = document.querySelectorAll('.deck'); // variable for selecting deck.

const moves = document.querySelector('.moves'); // to select the move container.

const restart = document.querySelector('.restart'); // to select reset button.


// the main funcrtion to invoke the matching game.
function change(event) {
    let liElement = event.target;
    if (!liElement.classList.contains('open') &&
        !liElement.classList.contains('match') &&
        liElement.classList.contains('card')) {
        liElement.classList.add('open', 'show')
        openCards.push(liElement);

        if (openCards.length == 2) {
            // to check if two cards match or not.
            if (openCards[0].innerHTML == openCards[1].innerHTML) {
                openCards[0].classList.add('match');
                openCards[1].classList.add('match');
                // openCards[0].classList.remove('show', 'open');
                // openCards[1].classList.remove('show', 'open');

                openCards = [];
                checkWinner();
                //to close the opened card if two cards do not match.

            } else {
                setTimeout(function () {
                    openCards[0].classList.remove('show', 'open');
                    openCards[1].classList.remove('show', 'open');
                    openCards = [];
                }, 200);
            }

            moves.innerHTML++;
            //this helps to count the number of moves the user has undergone to solve the game.
        }
    }
};


// to show the message after all the cards match.
function checkWinner() {
    if (matchedCards.length == 16) {
        winning.style.display = "flex";
    }
}

document.body.addEventListener('click', change);


// features of reset button.
restart.addEventListener('click', function () {
    let selectCard = document.getElementsByClassName('card')
    for (x = 0; x < selectCard.length; x++) {
        selectCard[x].classList.remove('show', 'open', 'match');
    }
    moves.innerHTML = "0";
    winning.style.display = "none";
});