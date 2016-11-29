// var card1 = 'queen';
// var card2 = 'king';
// var card3 = 'king';
// var card4 = 'queen';
var cardsInPlay = [];
var cards = []; // does not contain kings or queens
// will contain integers from createDeck(howMany)
// howMany determines number of cards
var howMany = 6;

function createDeck(numOfCards) {
	/* creates pairs of integers in array
	determined by parameter.
	odd number parameter creates one without a pair.
	not randomized.
	returns an array of integers. */
	var cards = [];
	// for (var i=0; i<numOfCards; i++) {
	// 	//requires Math library
	// 	cards.push(int(i/2 + 1));
	// }

	// alternative to not having floor or int functions
	for (var i=0; i<(numOfCards/2); i++){
		cards.push(i);
	}
	for (var i=0; i<(numOfCards/2 - 1/2); i++){
		cards.push(i);
	}
	return cards;
}

// fills cards[] array with integers
cards = createDeck(howMany);

function createCards(numOfCards) {
	// initialize empty placeholder card
	// and empty array cardDivs[]
	var card;
	var cardDivs = [];
	// set game-board element to var gameBoard
	var gameBoard = document.getElementById('game-board');
	// create div of class 'card'
	for (var i=0; i<numOfCards; i++) {
		card = document.createElement('div');
		card.className = 'card';
		gameBoard.appendChild(card);
		cardDivs.push(card);
	}
	return cardDivs;
}

// execute createCards while saving array returned
var cardElement = createCards(howMany);

function createBoard() {
	// this will set the card's 'data-card' to be the element of the array
  	// data- attributes are meant to store data about an element that is not
	// tied to a style.
  	// i.e. '3', '6'
  	for (var i = 0; i < cards.length; i++) {
  		cardElement[i].setAttribute('data-card', cards[i]);
  		cardElement[i].addEventListener('mousedown', displayCard);  		
  		cardElement[i].addEventListener('click', isTwoCards);
	}
}

// adds text to card upon mousedown event
function displayCard() {
	console.log(this.getAttribute('data-card'));
	this.textContent = this.getAttribute('data-card');
}

// checks to see if there are cards in play
// note to self: could use a check against
// selecting the same card twice
function isTwoCards() {
	console.log('isTwoCards is happening');
  	// add card to array of cards in play
 	// 'this' hasn't been covered in this prework, but
 	// for now, just know it gives you access to the card the user clicked on
	cardsInPlay.push(this.getAttribute('data-card'));
	// if you have two cards in play check for a match
	if (cardsInPlay.length === 2) {
		// pass the cardsInPlay as an argument to isMatch function
		isMatch(cardsInPlay);
		// clear cards in play array for next try
		cardsInPlay = [];
	}
}

// checks for matching cards and
// resets style/inner HTML
function isMatch(cIP) {
	if (cIP[0] === cIP[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}

    for (var i = 0; i < cards.length; i++) {
  		cardElement[i].innerHTML = '';
	}
}


createBoard();