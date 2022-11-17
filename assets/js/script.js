function runGame() {

}
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

function pickColor() {

}

function compareCode() {

}

function pegCreate() {

}

function incrementRow() {

}