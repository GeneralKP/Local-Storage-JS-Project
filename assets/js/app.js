//Variables
const listaTweets = document.getElementById('lista-tweets');
let change = true;

//Event Listeners
eventListeners();

function eventListeners() {
    //Dark mode function
    document.getElementById('darkMode').addEventListener('click', changeColors);

    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    listaTweets.addEventListener('click', borrarTweet);
}
//Funciones

function agregarTweet(e) {
    e.preventDefault();

    //Leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    //Crear botón de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //Crear elemento y añadorle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //Añade el boton borrar al tweet
    li.appendChild(botonBorrar);
    //Añade el tweet a la lista
    listaTweets.appendChild(li);
}

function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className === 'borrar-tweet') {
        console.log(e.target.parentElement.remove());
        alert('Tweet Eliminado')
    }
}

function changeColors(e) {
    e.preventDefault();

    if (this.change) {
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