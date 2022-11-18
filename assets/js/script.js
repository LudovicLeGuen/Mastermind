function runGame() {

}
/**
 * The secret code of 4 colors is randomly created
 * and the users will have to guess it.
 */
let colors = ["blue", "red", "yellow", "green", "orange", "purple"];
let secretCode = randomCode()

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
 * User selects the spot where he wants to 
 * place a color.
 */
let holders = document.getElementsByClassName('color-holder');

for (let holder of holders) {
        holder.addEventListener('click', function handleClick(event) {
                console.log('box clicked', event);
                holder.setAttribute('style', 'background-color: yellow;');
        });
}
/**
 * User selects the color he wants to  
 * place on the selected spot.
 */
 let choices = document.getElementsByClassName('color');

 for (let choice of choices) {
         choice.addEventListener('click', function handleClick(event) {
                 console.log('color chosen', event);
                 holder.setAttribute('style', 'border: solid 2px pink;');
         });
 }


function pickColor() {

}

function compareCode() {

}

function pegCreate() {

}

function incrementRow() {

}