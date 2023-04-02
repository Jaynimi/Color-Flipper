const colors = ["Green", "Red", "Lightcoral", "Black", "White", "Purple", "Grey", "Brown", "Pink", "Yellow"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// get random number of colors[] lenght
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})