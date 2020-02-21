//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event Listeners
eventListeners();



function eventListeners() {
    //Dark mode function
    document.getElementById('darkMode').addEventListener('click', changeColors);
}

let change = true;
function changeColors(e) {
    e.preventDefault();

    if (this.change){
        console.log("¡Click!");
        document.body.style.background = 'black';
        document.body.style.color = 'white';
        document.getElementById("tweet").style.backgroundColor = '#343434';
        this.change = !this.change;
    } else {
        console.log("¡Click!");
        document.body.style.background = 'white';
        document.body.style.color = 'black';
        document.getElementById("tweet").style.backgroundColor = 'white';
        this.change = !this.change;
    }
}