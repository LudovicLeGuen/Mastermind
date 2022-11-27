const colors = ["blue", "red", "yellow", "green", "orange", "purple"];
let trial = 0
let final = randomCode()
/**
 * The secret code of 4 colors is randomly created
 * and the users will have to guess it.
 */
function randomCode() {
        let randomFinal = [...new Array(4)].map(color => {
                const random = Math.floor(Math.random() * Math.floor(colors.length));
                return colors[random];
        });
        console.log("this is the secret code: " + randomFinal);
        return randomFinal;
}

/**
 * User toggles colors to create a 4 colors guess.
 */
function changeColorG1() {
        let colorCode = document.getElementById("g1");
        const backgroundColor = colorCode.style.backgroundColor; // the.target allows me to toggle colors only on the clicked button

        if (backgroundColor === '') {
                colorCode.style.backgroundColor = 'blue';
        } else if (backgroundColor === 'blue') {
                colorCode.style.backgroundColor = 'red';
        } else if (backgroundColor === 'red') {
                colorCode.style.backgroundColor = 'yellow';
        } else if (backgroundColor === 'yellow') {
                colorCode.style.backgroundColor = 'green';
        } else if (backgroundColor === 'green') {
                colorCode.style.backgroundColor = 'orange';
        } else if (backgroundColor === 'orange') {
                colorCode.style.backgroundColor = 'purple';
        } else {
                colorCode.style.backgroundColor = 'blue';
        };
};

function changeColorG2() {
        let colorCode = document.getElementById("g2");
        const backgroundColor = colorCode.style.backgroundColor; // the.target allows me to toggle colors only on the clicked button

        if (backgroundColor === '') {
                colorCode.style.backgroundColor = 'blue';
        } else if (backgroundColor === 'blue') {
                colorCode.style.backgroundColor = 'red';
        } else if (backgroundColor === 'red') {
                colorCode.style.backgroundColor = 'yellow';
        } else if (backgroundColor === 'yellow') {
                colorCode.style.backgroundColor = 'green';
        } else if (backgroundColor === 'green') {
                colorCode.style.backgroundColor = 'orange';
        } else if (backgroundColor === 'orange') {
                colorCode.style.backgroundColor = 'purple';
        } else {
                colorCode.style.backgroundColor = 'blue';
        };
};

function changeColorG3() {
        let colorCode = document.getElementById("g3");
        const backgroundColor = colorCode.style.backgroundColor; // the.target allows me to toggle colors only on the clicked button

        if (backgroundColor === '') {
                colorCode.style.backgroundColor = 'blue';
        } else if (backgroundColor === 'blue') {
                colorCode.style.backgroundColor = 'red';
        } else if (backgroundColor === 'red') {
                colorCode.style.backgroundColor = 'yellow';
        } else if (backgroundColor === 'yellow') {
                colorCode.style.backgroundColor = 'green';
        } else if (backgroundColor === 'green') {
                colorCode.style.backgroundColor = 'orange';
        } else if (backgroundColor === 'orange') {
                colorCode.style.backgroundColor = 'purple';
        } else {
                colorCode.style.backgroundColor = 'blue';
        };
};

function changeColorG4() {
        let colorCode = document.getElementById("g4");
        const backgroundColor = colorCode.style.backgroundColor; // the.target allows me to toggle colors only on the clicked button

        if (backgroundColor === '') {
                colorCode.style.backgroundColor = 'blue';
        } else if (backgroundColor === 'blue') {
                colorCode.style.backgroundColor = 'red';
        } else if (backgroundColor === 'red') {
                colorCode.style.backgroundColor = 'yellow';
        } else if (backgroundColor === 'yellow') {
                colorCode.style.backgroundColor = 'green';
        } else if (backgroundColor === 'green') {
                colorCode.style.backgroundColor = 'orange';
        } else if (backgroundColor === 'orange') {
                colorCode.style.backgroundColor = 'purple';
        } else {
                colorCode.style.backgroundColor = 'blue';
        };
};


/**
 * The function creates an array out of the colors chosen 
 * by the player to break the final color code.
 */
function createPlayerGuess() {
        let playerGuess = []

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
        let whitePeg = 0;
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
        let playerGuess = createPlayerGuess()
        let redPeg = 0
        for (i = 0; i < 4; i++)
                if (playerGuess[i] == final[i]) {
                        redPeg++;
                } else {
                        //TBD
                }
        if (redPeg == 4) {
                trial++
                revealSecret()
                document.getElementById("submit").disabled = true;
                winLoose(redPeg, )
                console.log('YOU WIN')
        } else {
                let white = whitePeg(playerGuess) - redPeg;
                playerGuess = createPlayerGuess()
                createRow(playerGuess, redPeg, white);
                trial++
                winLoose(redPeg, )
                console.log("this is the number of guess" + trial)
        }
};

let modal = document.getElementById("popupModal");


/**This modal will open if you lose or win*/
function winLoose(redPeg) {

        if (redPeg == 4) {
                let textWin = `<div class="image"><img src="assets/images/you-win.png" alt="The winner banner"></div>
        <div class="play-container"><button class="play-again" onClick = 'location.reload();'>Play again</button></div>`
                document.getElementById("modal-content").innerHTML += textWin;
                modal.style.display = "block";
               
        } else if (trial == 10) {
                let textLose = `<div class="image"><img src="assets/images/you-lose.png" alt="The looser banner"></div>
        <div class="play-container"><button class="play-again" onClick = 'location.reload();'>Try again</button></div>`
                document.getElementById("modal-content").innerHTML += textLose;
                modal.style.display = "block";
                document.getElementById("submit").disabled = true;
        } else {}
}

/**This modal will open if you click the rules button*/
function rules() {
        let textRules = `<div><h1>Rules</h1></div><div><h3>The goal is to arrange different colored pegs in the correct order in a row.<br>The resulting pattern must match the hidden code. The player has up to 12 turns to crack the code.</h3></div>
        <div class="play-container"><button class="play-again" onClick = 'location.reload();'>Try again</button></div>`
        document.getElementById("modal-content").innerHTML += textRules;
        modal.style.display = "block";
}

// User clicks anywhere outside the modal to close it.
window.onclick = function (event) {
        if (event.target == modal) {
                modal.style.display = "none";
        }
}

// user clicks on (x) to close the modal. 
let btnClose = document.getElementById("close");
 
btnClose.addEventListener("click", closeModal);
function closeModal() {
        modal.style.display = "none";
}