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
 * User selects the spot where he wants to 
 * place a color.
 */

let holders = document.getElementsByClassName('color-holder');

for (let holder of holders) {
        holder.addEventListener('click', function handleClick(event) {
                console.log('box clicked', event);
                holder.style.backgroundColor = "white";
        });
}

/**
 * User selects the color he wants to  
 * place on the selected spot.
 */

let choices = document.getElementsByClassName('color');

for (let choice of choices) {
        choice.addEventListener('click', function onClick(event) {
                console.log('color chosen', event);
                choice.style.borderColor = "white";
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