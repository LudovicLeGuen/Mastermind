
/**
 * The secret code of 4 colors is randomly created
 * and the users will have to guess it.
 */
const colors = ["blue", "red", "yellow", "green", "orange", "purple"];
let final = randomCode()

// Creates 4 colors randomly
function randomCode() {
        const randomFinal = [...new Array(4)].map(color => {
                const random = Math.floor(Math.random() * Math.floor(colors.length));
                return colors[random];
        });
        console.log(randomFinal);
        return randomFinal;
}

/**
 * User toggles colors to create a 4 colors guess in a row.
 */
let colorCode = document.getElementsByClassName("color-holder");

for (var i = 0; i < colorCode.length; i++) {
        colorCode[i].addEventListener('click', function onClick(event) { // loop through all elements with the "color-holder" Class attribute

                const backgroundColor = event.target.style.backgroundColor; // the.target allows me to toggle colors only on the clicked button

                if (backgroundColor === '') {
                        event.target.style.backgroundColor = 'blue';
                } else if (backgroundColor === 'blue') {
                        event.target.style.backgroundColor = 'red';
                } else if (backgroundColor === 'red') {
                        event.target.style.backgroundColor = 'yellow';
                } else if (backgroundColor === 'yellow') {
                        event.target.style.backgroundColor = 'green';
                } else if (backgroundColor === 'green') {
                        event.target.style.backgroundColor = 'orange';
                } else if (backgroundColor === 'orange') {
                        event.target.style.backgroundColor = 'purple';
                } else {
                        event.target.style.backgroundColor = 'blue';
                };
        })
};

/**
 * The function creates an array out of the colors chosen 
 * by the player to break the final color code.
 */
function createPlayerGuess() {
        var playerGuess = []

        let obj1 = document.getElementById("g1");
        let guess1 = obj1.style.backgroundColor
        playerGuess[0] = guess1;

        let obj2 = document.getElementById("g2");
        let guess2 = obj2.style.backgroundColor
        playerGuess[1] = guess2;

        let obj3 = document.getElementById("g3");
        let guess3 = obj3.style.backgroundColor
        playerGuess[2] = guess3;

        let obj4 = document.getElementById("g4");
        let guess4 = obj4.style.backgroundColor
        playerGuess[3] = guess4;

        return playerGuess;
}

function compareCode() {

}

function pegCreate() {

}

function incrementRow() {

}