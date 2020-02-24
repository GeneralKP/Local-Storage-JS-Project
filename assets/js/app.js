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

    //Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
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


    //Añadir a local storage
    agregarTweetLocalStorage(tweet);
}

function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className === 'borrar-tweet') {
        //Elimina el tweet del DOM
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

//Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    //Añadir el nuevo tweet
    tweets.push(tweet);

    //Convertir de arreglo a string para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function obtenerTweetsLocalStorage() {
    /*Esta funcion lee cuantos tweets hay en LC
    Y en caso que haya algo, que lo añada al arreglo*/

    let tweets;

    //Se revisan los valores del Local Storage
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet) {
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
    });
}

//Eliminar tweet de Local Storage
function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;

    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
        if (tweetBorrar == tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets))
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