const $submit = document.querySelector("#submit-button");

let campeonSeleccionado = document.querySelector("#seleccion-campeon");

let $info = document.getElementById("champion-info");

// let arrayCampeones = Object.keys(campeones);

// let incluye = arrayCampeones.includes(campeonSeleccionado.value);

$submit.onclick = function(){
    tipsCampones();
    let habQ = campeones[campeonSeleccionado.value][0];
    let habW = campeones[campeonSeleccionado.value][1];
    let habE = campeones[campeonSeleccionado.value][2];
    let habR = campeones[campeonSeleccionado.value][3];
    document.querySelector("#label-tips").innerText = "Tips you may need";
    existeElCampeon = tips.hasOwnProperty(campeonSeleccionado.value);
    if (existeElCampeon === true) {
        document.querySelector("#label-tips").innerText += ` for ${campeonSeleccionado.value}`;
    } else {
        return $info.innerText = 
        `I'm sorry, there aren't quite good tips for ${campeonSeleccionado.value};`
    }
}

// Hacer una función que detecte un "Whole Number" y aplicar la función para que el timer no dé numeros negativos con habilidades que tengan decimales.

// Cuando selecciono un campeon que tiene un tip, dice "Tips you may need for X", pero si cambio el campeon y pongo uno que no tiene tip, se queda el nombre del campeon anterior
// con los tips del campeon anterior. Arreglar.

// Hacer el contador de FLASH. Facil.

const tipsCampones = function(){
    switch (campeonSeleccionado.value) {
        case "Aatrox":
            $info.innerText = tips["Aatrox"];
            break;
        case "Ahri":
            $info.innerText = tips["Ahri"];
            break;
        case "Akali":
            $info.innerText = tips["Akali"];
            break;
        case "Alistar":
            $info.innerText = tips["Alistar"];
            break;
        case "Anivia":
            $info.innerText = tips["Anivia"];
            break;
        case "Annie":
            $info.innerText = tips["Annie"];
            break;
        case "Aphelios":
            $info.innerText = tips["Aphelios"];
            break;
        case "Ashe":
            $info.innerText = tips["Ashe"];
            break;
        case "Azir":
            $info.innerText = tips["Azir"];
            break;
        case "Brand":
            $info.innerText = tips["Brand"];
            break;
        case "Caitlyn":
            $info.innerText = tips["Caitlyn"];
            break;
        case "Corki":
            $info.innerText = tips["Corki"];
            break;
        case "Darius":
            $info.innerText = tips["Darius"];
            break;
        case "Diana":
            $info.innerText = tips["Diana"];
            break;
        case "Draven":
            $info.innerText = tips["Draven"];
            break;
        case "Evelynn":
            $info.innerText = tips["Evelynn"];
            break;
        case "Ezreal":
            $info.innerText = tips["Ezreal"];
            break;
        case "Fiddlesticks":
            $info.innerText = tips["Fiddlesticks"];
            break;
        case "Fiora":
            $info.innerText = tips["Fiora"];
            break;
        case "Fizz":
            $info.innerText = tips["Fizz"];
            break;
        case "Galio":
            $info.innerText = tips["Galio"];
            break;
        case "Gangplank":
            $info.innerText = tips["Gangplank"];
            break;
        case "Gnar": 
            $info.innerText = tips["Gnar"];
            break;
        case "Gragas":
            $info.innerText = tips["Gragas"];
            break;
        case "Graves":
            $info.innerText = tips["Graves"];
            break;
        case "Hecarim":
            $info.innerText = tips["Hecarim"];
            break;
        case "Heimerdinger": 
            $info.innerText = tips["Heimerdinger"];
            break;
        case "Illaoi":
            $info.innerText = tips["Illaoi"];
            break;
        case "Irelia":
            $info.innerHTML = tips["Irelia"];
            break;
        case "Ivern":
            $info.innerHTML = tips["Ivern"];
            break;
        case "Janna":
            $info.innerHTML = tips["Janna"];
            break;
        case "Jarvan IV": 
            $info.innerHTML = tips["Jarvan IV"];
            break;
        case "Jax": 
            $info.innerHTML = tips["Jax"];
            break;
        case "Jayce":
            $info.innerHTML = tips["Jayce"];
            break;
        case "Jhin":
            $info.innerHTML = tips["Jhin"];
            break;
        case "KaiSa":
            $info.innerHTML = tips["KaiSa"];
            break;
        case "Kalista":
            $info.innerHTML = tips["Kalista"];
            break;
        case "Karma":
            $info.innerHTML = tips["Karma"];
            break;
        case "Kassadin":
            $info.innerHTML = tips["Kassadin"];
            break;
        case "Katarina":
            $info.innerHTML = tips["Katarina"];
            break;
        case "Kindred":
            $info.innerHTML = tips["Kindred"];
            break;
        case "Kayn":
            $info.innerHTML = tips["Kayn"];
            break;
        case "Kennen":
            $info.innerHTML = tips["Kennen"];
            break;
        case "KhaZix":
            $info.innerHTML = tips["KhaZix"];
            break;
        case "Kled":
            $info.innerHTML = tips["Kled"];
            break;
        case "KogMaw":
            $info.innerHTML = tips["KogMaw"];
            break;
        case "LeBlanc":
            $info.innerHTML = tips["LeBlanc"];
            break;
        case "Lee Sin":
            $info.innerHTML = tips["Lee Sin"];
            break;
        case "Lucian":
            $info.innerHTML = tips["Lucian"];
            break;
        case "Lulu":
            $info.innerHTML = tips["Lulu"];
            break;
        case "Lux":
            $info.innerHTML = tips["Lux"];
            break;
        case "Malphite":
            $info.innerHTML = tips["Malphite"];
            break;
        case "Malzahar":
            $info.innerHTML = tips["Malzahar"];
            break;
        case "Maokai":
            $info.innerHTML = tips["Maokai"];
            break;
        case "Master Yi":
            $info.innerHTML = tips["Master Yi"];
            break;
        case "Miss Fortune":
            $info.innerHTML = tips["Miss Fortune"];
            break;
        case "Mordekaiser":
            $info.innerHTML = tips["Mordekaiser"];
            break;
        case "Morgana":
            $info.innerHTML = tips["Morgana"];
            break;
        case "Nasus":
            $info.innerHTML = tips["Nasus"];
            break;
        case "Nautilus":
            $info.innerHTML = tips["Nautilus"];
            break;
        case "Neeko":
            $info.innerHTML = tips["Neeko"];
            break;
        case "Nidalee":
            $info.innerHTML = tips["Nidalee"];
            break;
        case "Nocturne":
            $info.innerHTML = tips["Nocturne"];
            break;
        case "Nunu":
            $info.innerHTML = tips["Nunu"];
            break;
        case "Olaf":
            $info.innerHTML = tips["Olaf"];
            break;
        case "Ornn":
            $info.innerHTML = tips["Ornn"];
            break;
        case "Pantheon":
            $info.innerHTML = tips["Pantheon"];
            break;
        case "Poppy":
            $info.innerHTML = tips["Poppy"];
            break;
        case "Pyke":
            $info.innerHTML = tips["Pyke"];
            break;
        case "Qiyana":
            $info.innerHTML = tips["Qiyana"];
            break;
        case "Quinn":
            $info.innerHTML = tips["Quinn"];
            break;
        case "Rakan":
            $info.innerHTML = tips["Rakan"];
            break;
        case "RekSai":
            $info.innerHTML = tips["RekSai"];
            break;
        case "Renekton":
            $info.innerHTML = tips["Renekton"];
            break;
        case "Rengar":
            $info.innerHTML = tips["Rengar"];
            break;
        case "Riven":
            $info.innerHTML = tips["Riven"];
            break;
        case "Rumble":
            $info.innerHTML = tips["Rumble"];
            break;
        case "Ryze":
            $info.innerHTML = tips["Ryze"];
            break;
        case "Sejuani":
            $info.innerHTML = tips["Sejuani"];
            break;
        case "Senna":
            $info.innerHTML = tips["Senna"];
            break;
        case "Shaco":
            $info.innerHTML = tips["Shaco"];
            break;
        case "Shyvana":
            $info.innerHTML = tips["Shyvana"];
            break;
        case "Singed":
            $info.innerHTML = tips["Singed"];
            break;
        case "Skarner":
            $info.innerHTML = tips["Skarner"];
            break;
        case "Swain":
            $info.innerHTML = tips["Swain"];
            break;
        case "Sylas":
            $info.innerHTML = tips["Sylas"];
            break;
    }
}
let i = 0;

const $botonQ = document.querySelector("#letraQ");
const $botonW = document.querySelector("#letraW");
const $botonE = document.querySelector("#letraE");
const $botonR = document.querySelector("#letraR");

let tempQ;
let tempW;
let tempE;
let tempR;

function timerQ(){
    if (i < habQ){
        habQ = habQ - 1;
        $botonQ.textContent = habQ;
    } else if (i >= habQ){
        configQ();
    }
}

function timerW(){
    if (i < habW){
        habW = habW - 1;
        $botonW.textContent = habW;
    } else if (i >= habW){
        configW();
    }
}

function timerE(){
    if (i < habE){
        habE = habE - 1;
        $botonE.textContent = habE;
    } else if (i >= habE){
        configE();
    }
}

function timerR(){
    if (i < habR){
        habR = habR - 1;
        $botonR.textContent = habR;
    } else if (i >= habR){
        configR();
    }
}

function configQ(){
    clearInterval(tempQ);
    $botonQ.textContent = "Q";
    habQ = campeones[campeonSeleccionado.value][0];
}

function configW(){
    clearInterval(tempW);
    $botonW.textContent = "W";
    habW = campeones[campeonSeleccionado.value][1];
}

function configE(){
    clearInterval(tempE);
    $botonE.textContent = "E";
    habE = campeones[campeonSeleccionado.value][2];
}

function configR(){
    clearInterval(tempR);
    $botonR.textContent = "R";
    habR = campeones[campeonSeleccionado.value][3];
}

$botonQ.onclick = function(){
    configQ();
    tempQ = setInterval(timerQ, 1000);
}

$botonW.onclick = function(){
    configW();
    tempW = setInterval(timerW, 1000);
}

$botonE.onclick = function(){
    configE();
    tempE = setInterval(timerE, 1000);
}

$botonR.onclick = function(){
    configR();
    tempR = setInterval(timerR, 1000);
}

document.onkeydown = function letras(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===81){ // Q
        configQ();
        tempQ = setInterval(timerQ, 1000);
    } else if(key===87){ // W
        configW();
        tempW = setInterval(timerW, 1000);
    } else if(key===69){ // E
        configE();
        tempE = setInterval(timerE, 1000);
    } else if(key===82){ // R
        configR();
        tempR = setInterval(timerR, 1000);
    } else {
        ;
    }
}

const $botonRefrescar = document.querySelector("#refrescar");

$botonRefrescar.onclick = function pararTemps(){
    clearInterval(tempQ);
    configQ();
    clearInterval(tempW);
    configW();
    clearInterval(tempE);
    configE();
    clearInterval(tempR);
    configR();
}

restartQ = document.querySelector("#boton1");
restartQ.onclick = function (){
    clearInterval(tempQ);
    configQ();
}

restartW = document.querySelector("#boton2");
restartW.onclick = function (){
    clearInterval(tempW);
    configW();
}

restartZ = document.querySelector("#boton3");
restartZ.onclick = function (){
    clearInterval(tempE);
    configE();
}

restartR = document.querySelector("#boton4");
restartR.onclick = function (){
    clearInterval(tempR);
    configR();
}
