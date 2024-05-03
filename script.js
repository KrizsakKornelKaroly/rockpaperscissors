let valasztott;

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
    koeleres = document.getElementById("kokep")
    papireleres = document.getElementById("papirkep")
    olloeleres = document.getElementById("ollokep")
    switch(valasztott){
        case "ko": 
        koeleres.style.border = "1px solid red"; 
        papireleres.style.border = "none";
        olloeleres.style.border = "none";
        break;
        case "papir": 
        papireleres.style.border = "1px solid red"; 
        koeleres.style.border = "none";
        olloeleres.style.border = "none";
        break;
        case "ollo": 
        olloeleres.style.border = "1px solid red"; 
        koeleres.style.border = "none";
        papireleres.style.border = "none";
        break;

    }
}