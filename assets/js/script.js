const colors = ["blue", "red", "yellow", "green", "orange", "purple"];
let trial = 0
let final = randomCode()
let currentRow = 1

document.getElementById("submit").disabled = true; 
/**
 * The secret code of 4 colors is randomly created
 * and the users will have to guess it.
 */
function randomCode() {
        let randomFinal = []

        let randomColor1 = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < colors.length; i++) {

                if (colors[i] ===randomColor1) {
                        colors.splice(i, 1);
                }
        }

        let randomColor2 = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < colors.length; i++) {

                if (colors[i] === randomColor2) {
                        colors.splice(i, 1);
                }
        }

        let randomColor3 = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < colors.length; i++) {

                if (colors[i] === randomColor3) {
                        colors.splice(i, 1);
                }
        }

        let randomColor4 = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < colors.length; i++) {

                if (colors[i] === randomColor4) {
                        colors.splice(i, 1);
                }
        }
        randomFinal.push(randomColor1)
        randomFinal.push(randomColor2)
        randomFinal.push(randomColor3)
        randomFinal.push(randomColor4)

        console.log("this is the code to break" + randomFinal)

        return randomFinal
}

/**
 * User toggles colors to create a 4 colors guess.
 */
function changeColorKoko(event, rowId, rowIdAsString) { // this function has been made with my mentor's help Owonikoko Oluwaseun. 
        if (currentRow === parseInt(rowId)) { //Thats is the reason why the function actually bears her nickname :)
                let colorCode = document.getElementById(rowIdAsString);
                const backgroundColor = colorCode.style.backgroundColor;

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
        }
        let playerGuess = createPlayerGuess()

        if (playerGuess[0] && playerGuess[1] && playerGuess[2] && playerGuess[3] !== '') {
                document.getElementById("submit").classList.add('submit-glow');
                document.getElementById("submit").disabled = false;
        }
}

/**
 * The function creates an array out of the colors chosen 
 * by the player to break the final color code.
 */
function createPlayerGuess() {
        let playerGuess = []

        let obj1 = document.getElementById(`r${currentRow}g1`);
        let guess1 = obj1.style.backgroundColor
        playerGuess[0] = guess1;

        let obj2 = document.getElementById(`r${currentRow}g2`);
        let guess2 = obj2.style.backgroundColor
        playerGuess[1] = guess2;

        let obj3 = document.getElementById(`r${currentRow}g3`);
        let guess3 = obj3.style.backgroundColor
        playerGuess[2] = guess3;

        let obj4 = document.getElementById(`r${currentRow}g4`);
        let guess4 = obj4.style.backgroundColor
        playerGuess[3] = guess4;

        return playerGuess;
}

/**
 * The function reveals the secret color code randomly generated
 */
function revealSecret() {
        let arr = final
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

        return whitePeg;
}
/**
 * The function removes the glow class attribute 
 * from the color holders
 */
function glow() {
        let holders = document.querySelectorAll('.glow');

        holders.forEach((holder) => {
                holder.classList.remove('glow');
        });
}

/**
 * each turn the function populates the pegs holders 
 * accodring to the guess results
 */
function createRow(redPeg, white) {
        let target = document.getElementById(`peg${currentRow}`);
        target.remove();
        let newPeg = "<span class='pegs'>";

        for (let i = 0; i < redPeg; i++) {
                newPeg += "<div class='red-peg'></div>";
        }
        for (let i = 0; i < white; i++) {
                newPeg += "<div class='white-peg'></div>";
        }
        if (redPeg + white < 4) {
                for (let i = redPeg + white; i < 4; i++) {
                        newPeg += "<div class = 'peg-holder'></div>";
                }
        }
        newPeg += "</span>";

        document.getElementById(`row${currentRow}`).insertAdjacentHTML("afterbegin", newPeg);
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

                }

        if (redPeg == 4) {
                trial++
                revealSecret()
                winLoose(redPeg, )
                glow()
                document.getElementById("submit").disabled = true;
                document.getElementById("submit").classList.remove('submit-glow')


        } else {
                let white = whitePeg(playerGuess) - redPeg;
                createRow(redPeg, white);
                trial++
                winLoose(redPeg)
                glow()
                document.getElementById("submit").disabled = true;
                document.getElementById("submit").classList.remove('submit-glow')
        }

        currentRow += 1

        let newHolders = document.getElementsByClassName(`${currentRow}`);
        for (let newHolder of newHolders) {
                newHolder.classList.add('glow');
        }
        document.getElementById("submit").classList.remove('glow');
};

let modal = document.getElementById("popupModal");
/**This modal will open if you lose or win*/
function winLoose(redPeg) {

        if (redPeg == 4) {
                let textWin = `<div id="remove"><div class="image"><img src="assets/images/you-win.png" alt="The winner banner"></div>
        <div class="play-container"><button class="play-again" onClick = 'location.reload();'>Play again</button></div></div>`
                document.getElementById("modal-content").insertAdjacentHTML("beforeend", textWin);
                modal.style.display = "block";

        } else if (trial == 12) {
                revealSecret()
                let textLose = `<div id="remove"><div class="image"><img src="assets/images/you-lose.png" alt="The looser banner"></div>
        <div class="play-container"><button class="play-again" onClick = 'location.reload();'>Try again</button></div></div>`
                document.getElementById("modal-content").insertAdjacentHTML("beforeend", textLose);
                modal.style.display = "block";
                document.getElementById("submit").disabled = true;
        } else {}
}

/**This modal will open if you click the rules button*/
function rulesPage1() {
        let textRules = `<div id="remove">
        <div class="title-box">
            <h1>Rules 1/6</h1>
        </div>
        <div class="rule-box">
        <span class="left" style="color: white;"><i class="fa-solid fa-chevron-left"></i></span>  
                <div class = "description"><img src="assets/images/secret.png" alt="secret code location">       
                <h3>You have up to 12 turns to break the secret color code under Refresh and Rules.<br>
                </h3>
                </div>           
            <span class="right" onClick='rulesPage2();' style="cursor: pointer;"><i class="fa-solid fa-chevron-right"></i>
        </span>
        </div>
        <div class="play-container"><button class="play-again" onClick='closeModal();'>Continue</button></div>
    </div>`
        document.getElementById("modal-content").insertAdjacentHTML("beforeend", textRules);
        modal.style.display = "block";
}

function rulesPage1b() {
        let el = document.getElementById("remove");
        el.remove();

        let textRules = `<div id="remove">
        <div class="title-box">
            <h1>Rules 1/6</h1>
        </div>
        <div class="rule-box">
        <span class="left" style="color: white;"><i class="fa-solid fa-chevron-left"></i></span>  
                <div class = "description"><img src="assets/images/secret.png" alt="secret code location">       
                <h3>You have up to 12 turns to break the secret color code under Refresh and Rules.<br>
                </h3>
                </div>           
            <span class="right" onClick='rulesPage2();' style="cursor: pointer;"><i class="fa-solid fa-chevron-right"></i>
        </span>
        </div>
        <div class="play-container"><button class="play-again" onClick='closeModal();'>Continue</button></div>
    </div>`
        document.getElementById("modal-content").insertAdjacentHTML("beforeend", textRules);
        modal.style.display = "block";
}

function rulesPage2() {
        let el = document.getElementById("remove");
        el.remove();

        let textRules = `<div id="remove">
        <div class="title-box">
            <h1>Rules 2/6</h1>
        </div>
        <div class="rule-box">
        <span class="left" onClick='rulesPage1b();' style="cursor: pointer;"><i class="fa-solid fa-chevron-left"></i></span>  
                <div class = "description"><img src="assets/images/new-row.png" alt="picture of a new row">       
                <h3>Create a guess in the highlighted spots by clicking them.
                </h3>
                </div>           
            <span class="right" onClick='rulesPage3();' style="cursor: pointer;"><i class="fa-solid fa-chevron-right"></i>
        </span>
        </div>
        <div class="play-container"><button class="play-again" onClick='closeModal();'>Continue</button></div>
    </div>`
        document.getElementById("modal-content").insertAdjacentHTML("beforeend", textRules);
        modal.style.display = "block";
}

function rulesPage3() {
        let el = document.getElementById("remove");
        el.remove();

        let textRules = `<div id="remove">
        <div class="title-box">
            <h1>Rules 3/6</h1>
        </div>
        <div class="rule-box">
        <span class="left" onClick='rulesPage2();' style="cursor: pointer;"><i class="fa-solid fa-chevron-left"></i></span>  
                <div class = "description"><img src="assets/images/submit.png" alt="The submit button">       
                <h3>The submit button will be available as soon as 4 colors are selected.
                </h3>
                </div>           
            <span class="right" onClick='rulesPage4();' style="cursor: pointer;"><i class="fa-solid fa-chevron-right"></i>
        </span>
        </div>
        <div class="play-container"><button class="play-again" onClick='closeModal();'>Continue</button></div>
    </div>`
        document.getElementById("modal-content").insertAdjacentHTML("beforeend", textRules);
        modal.style.display = "block";
}

function rulesPage4() {
        let el = document.getElementById("remove");
        el.remove();

        let textRules = `<div id="remove">
        <div class="title-box">
            <h1>Rules 4/6</h1>
        </div>
        <div class="rule-box">
        <span class="left" onClick='rulesPage3();' style="cursor: pointer;"><i class="fa-solid fa-chevron-left"></i></span>  
                <div class = "description"><img src="assets/images/pegs.png" alt="Color pegs pictures">       
                <h3>The game will feedback a red peg for a correctly placed color (the red color above).
                </h3>
                </div>           
                <span class="right" onClick='rulesPage5();' style="cursor: pointer;"><i class="fa-solid fa-chevron-right"></i>
        </span>
        </div>
        <div class="play-container"><button class="play-again" onClick='closeModal();'>Continue</button></div>
    </div>`
        document.getElementById("modal-content").insertAdjacentHTML("beforeend", textRules);
        modal.style.display = "block";
}

function rulesPage5() {
        let el = document.getElementById("remove");
        el.remove();

        let textRules = `<div id="remove">
        <div class="title-box">
            <h1>Rules 5/6</h1>
        </div>
        <div class="rule-box">
        <span class="left" onClick='rulesPage4();' style="cursor: pointer;"><i class="fa-solid fa-chevron-left"></i></span>  
                <div class = "description"><img src="assets/images/pegs.png" alt="Color pegs pictures">       
                <h3>The game will feedback a white peg for a misplaced color (the green color above).
                </h3>
                </div>           
                <span class="right" onClick='rulesPage6();' style="cursor: pointer;"><i class="fa-solid fa-chevron-right"></i>
        </span>
        </div>
        <div class="play-container"><button class="play-again" onClick='closeModal();'>Continue</button></div>
    </div>`
        document.getElementById("modal-content").insertAdjacentHTML("beforeend", textRules);
        modal.style.display = "block";
}

function rulesPage6() {
        let el = document.getElementById("remove");
        el.remove();

        let textRules = `<div id="remove">
        <div class="title-box">
            <h1>Rules 6/6</h1>
        </div>
        <div class="rule-box">
        <span class="left" onClick='rulesPage5();' style="cursor: pointer;"><i class="fa-solid fa-chevron-left"></i></span>  
                <div class = "description"><img src="assets/images/goodluck.png" alt="Color pegs pictures">       
                
                </div>           
            <span class="right" style="color: white;"><i class="fa-solid fa-chevron-right"></i>
        </span>
        </div>
        <div class="play-container"><button class="play-again" onClick='closeModal();'>Continue</button></div>
    </div>`
        document.getElementById("modal-content").insertAdjacentHTML("beforeend", textRules);
        modal.style.display = "block";
}

// User clicks anywhere outside the modal to close it.
window.onclick = function (event) {
        if (event.target == modal) {

                // this piece of script allows the content to not be duplicated each time the modal is closed and opened
                let el = document.getElementById("remove");
                el.remove();
                // this line closes the modal
                modal.style.display = "none";
        }
}

// user clicks on (x) to close the modal. 
let btnClose = document.getElementById("close");
btnClose.addEventListener("click", closeModal);

function closeModal() {
        let el = document.getElementById("remove");
        el.remove();

        modal.style.display = "none";
}