
$.getScript('../DB/textDB.js', function()
{
    console.log("database loaded");
    console.log("peter suce")

});
var rosterSelection = 0
var rosterLoad = false;
if(localStorage.getItem("isItRunning") == "true")
{
    console.log("running");
    loadRoster1()
    rosterLoad = false;
    localStorage.setItem("isItRunning",rosterLoad);
}else
{

    $(document).ready(function(){
        $("#petercuck").click(function(){
        setSelectionRoster(1);
    });
    });
}
function setSelectionRoster(ourSelection)
{
    rosterSelection = ourSelection;
    rosterLoad = true;
    localStorage.setItem("isItRunning",rosterLoad);
    onRun();
}

function onRun()
{
    if(localStorage.getItem("isItRunning") == true)
    {
        localStorage.setItem("rosterIndex",rosterSelection);
    }
}
function loadRoster1(){
    document.getElementById("titleofPage").innerHTML=Peter.alias;
    document.getElementById("playerName").innerHTML =Peter.name+" "+Peter.firstname;
    document.getElementById("firstname").innerHTML = "first name: "+Peter.firstname;
    document.getElementById("lastname").innerHTML = "last name: "+Peter.name;
    document.getElementById("age").innerHTML = " age: "+Peter.age;
    document.getElementById("awpLevel").innerHTML = "awp level: "+Peter.awpLevel;
    document.getElementById("rifleLevel").innerHTML = "rifle level: "+Peter.rifleLevel;
    document.getElementById("gamesence").innerHTML = "game sence: "+Peter.gameSence;
    document.getElementById("inteligence").innerHTML = "inteligence: "+Peter.inteligence;
    document.getElementById("description").innerHTML = Peter.bio;
    document.getElementById("playerimage").style.backgroundImage = Peter.playerimage;
}

