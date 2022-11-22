/**
 * The secret code of 4 colors is randomly created
 * and the users will have to guess it.
 */
const colors = ["blue", "red", "yellow", "green", "orange", "purple"];
let final = randomCode()

// Creates 4 colors randomly
function randomCode() {
        var randomFinal = [...new Array(4)].map(color => {
                const random = Math.floor(Math.random() * Math.floor(colors.length));
                return colors[random];
        });
        console.log("this is the secret code: " + randomFinal);
        return randomFinal;
}

/**
 * User toggles colors to create a 4 colors guess.
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

        console.log(playerGuess);
        return playerGuess;
}

/**
 * The function reveals the secret color code randomly generated
 */
function revealSecret() {
        let arr = final
        let secret1 = document.getElementById("secret-code")
        let secretColor1 = arr[0]
        let secretColor2 = arr[1]
        let secretColor3 = arr[2]
        let secretColor4 = arr[3]
        document.getElementById("secret-color-1").style.backgroundColor = secretColor1;
        document.getElementById("secret-color-2").style.backgroundColor = secretColor2;
        document.getElementById("secret-color-3").style.backgroundColor = secretColor3;
        document.getElementById("secret-color-4").style.backgroundColor = secretColor4;

}

/**
 * The function counts the number of misplaced 
 * colors in the user guess
 */
function whitePeg(playerGuess) {
        var whitePeg = 0;
        for (i = 0; i < 4; i++) {
                for (j = 0; j < 4; j++) {
                        if (final[i] == playerGuess[j]) {
                                whitePeg++;
                                break;
                        }
                }
        }
        console.log(whitePeg);

        return whitePeg;
}

/**
 * each turn the function create a new row 
 * with the guess results
 */
function createRow(playerGuess, redPeg, white) {
        let gameSpace = document.getElementById('row');
        let newPeg = "<div id='row'><span class='pegs'>";

        for (let i = 0; i < redPeg; i++) {
                newPeg += "<div class='red-peg'></div>";
        }
        for (let i = 0; i < white; i++) {
                newPeg += "<div class='white-peg'></div>";
        }
        if (redPeg + white < 4) {
                for (let i = redPeg + white; i < 4; i++) {
                        newPeg += "<div class = 'peg-print'></div>";
                }
        }
        newPeg += "</span>";

        let arr = playerGuess
        color1 = arr[0];
        color2 = arr[1];
        color3 = arr[2];
        color4 = arr[3];

        let newChoice1 = "<span class='code-breaker'><div class='color-print' style = 'background-color:" + color1 + "'></div>"
        let newChoice2 = "<div class='color-print' style ='background-color:" + color2 + "'></div>"
        let newChoice3 = "<div class='color-print' style ='background-color:" + color3 + "'></div>"
        let newChoice4 = "<div class='color-print' style ='background-color:" + color4 + "'></div>"
        
        newPeg2 = "</span></div>";

        document.getElementById('decoding-board').innerHTML += (newPeg + newChoice1 + newChoice2 + newChoice3 + newChoice4 + newPeg2);

}

/**
 * The function compares the user's guess array 
 * to the randomly generated array of color at
 * the start of the game.
 */
function compareCodes() {
        var playerGuess = createPlayerGuess()
        let redPeg = 0
        for (i = 0; i < 4; i++)
                if (playerGuess[i] == final[i]) {
                        redPeg++;
                } else {
                        //TBD
                }
        if (redPeg == 4) {
                revealSecret()
                document.getElementById("submit").disabled = true;
                youWin()
                console.log('YOU WIN')
        } else {
                let white = whitePeg(playerGuess) - redPeg;
                playerGuess = createPlayerGuess()
                createRow(playerGuess, redPeg, white);
        }
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function youWin() {
        modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
        modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
        if (event.target == modal) {
                modal.style.display = "none";
        }
}