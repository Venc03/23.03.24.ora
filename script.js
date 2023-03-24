import {PICLIST} from "./adat.js"
import {HATTER} from "./adat.js"
let lista = [];
let memopics = "";

$(function(){
    console.log("Betoltott az oldal")
    let txt = "";
    txt = outPut();
    
})

console.log("Oldal nem toltott meg be")

function outPut(){
    let txt = "";
    txt += head();
    txt += button();
    return txt;
}

function head(){
    const HEAD = $("header");
    HEAD.html('<p id = "welcome">WELCOME to our memory game. Please click to start.</p>');
    const welcome = $('#welcome');
}

function button(){
    const ART = $("article");
    ART.html('<button id = "start">Start</button>');
    $('#start').on('click', function() {
        startGame();
      });
}

function startGame(){
    const HEAD = $("header")
    const button = $('#start');
    button.remove();
    welcome.remove();
    HEAD.html('<p id="gamenote">The game started, good luck.</p>');
    osszeallit(PICLIST);
    const ART = $("article");
    ART.html(memopics);

    const IMG = $("img");
    IMG.on("click", (event) => {
        turn($(event.target));
    });
}

function osszeallit(PICLIST){
    for (let i = 0; i < PICLIST.length; i++){
        memopics += `<div><img src = ${HATTER} alt="This is the ${i} pic."></div>`; 
    }
    console.log(memopics)
   return memopics;
}

function turn(event){
    const currId = event.attr('id');
    event.attr("src", PICLIST[currId])
    lista.push(currId);
    console.log(event)
}