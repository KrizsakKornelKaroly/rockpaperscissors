let valasztott;
let jatekosValasztas;
let gepValasztas;
let botPontszam = 0;
let jatekosPontszam = 0;
let iteletHely = document.getElementById("itelet");
let gepSzamlalo = document.getElementById("geppontok");
let jatekosSzamlalo = document.getElementById("jatekospontok");
let gepeleres = document.getElementById("gepValasztasa");
let koeleres = document.getElementById("kokep");
let papireleres = document.getElementById("papirkep");
let olloeleres = document.getElementById("ollokep");

function KattKo()
{
    valasztott = "ko"
    Kijeloles()
}
function KattPapir()
{
    valasztott = "papir"
    Kijeloles()
}
function KattOllo()
{
    valasztott = "ollo"
    Kijeloles()
}

function Kijeloles()
{
    switch(valasztott){
        case "ko": 
            koeleres.style.border = "1px solid red"; 
            papireleres.style.border = "none";
            olloeleres.style.border = "none";
            jatekosValasztas = "ko";
            break;
        case "papir": 
            papireleres.style.border = "1px solid red"; 
            koeleres.style.border = "none";
            olloeleres.style.border = "none";
            jatekosValasztas = "papir";
            break;
        case "ollo": 
            olloeleres.style.border = "1px solid red"; 
            koeleres.style.border = "none";
            papireleres.style.border = "none";
            jatekosValasztas = "ollo";
            break;

    }
    BotValasztas()
}

function BotValasztas()
{
    let randomszam = Math.floor(Math.random()*3) + 1;

    switch (randomszam){
        case 1:
            gepeleres.src = "ko.png";
            gepValasztas = "ko";
            break;
        case 2:
            gepeleres.src = "papir.png";
            gepValasztas = "papir";
            break;
        case 3:
            gepeleres.src = "ollo.png";
            gepValasztas = "ollo";
            break;
    }
    EredmenyValasztas()
}

function EredmenyValasztas()
{
    let eredmeny;
    let osszeadva = jatekosValasztas+gepValasztas;
    if(osszeadva == "koko" || osszeadva == "papirpapir" || osszeadva == "olloollo")
        {
            eredmeny = "Döntetlen!";
            iteletHely.textContent = eredmeny;
            jatekosSzamlalo.textContent = jatekosPontszam;
            gepSzamlalo.textContent = botPontszam;
        }
    else if(osszeadva =="koollo" || osszeadva =="papirko" || osszeadva =="ollopapir")
        {
            eredmeny = "Te nyertél!";
            iteletHely.textContent = eredmeny;
            jatekosPontszam += 1;
            jatekosSzamlalo.textContent = jatekosPontszam;
            gepSzamlalo.textContent = botPontszam;
        }
    else
        {
            eredmeny = "Gép nyert!";
            iteletHely.textContent = eredmeny;
            botPontszam +=1;
            jatekosSzamlalo.textContent = jatekosPontszam;
            gepSzamlalo.textContent = botPontszam;
        }
}
