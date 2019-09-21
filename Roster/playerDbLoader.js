
$.getScript('../DB/textDB.js', function()
{
    console.log("database loaded");
    console.log("peter suce")

});

var rosterSelection = 0
var rosterLoad = false;
var myRosterDbIndex = 0;

function setSelectionRoster(ourSelection)
{
    rosterSelection = ourSelection;
    rosterLoad = true;
    localStorage.setItem("isItRunning",rosterLoad);
    onRun();
}

function onRun()
{
    if(localStorage.getItem("isItRunning") == "true")
    {
        localStorage.setItem("rosterIndex",rosterSelection);
    }
}

function loadRoster(){
    document.getElementById("titleofPage").innerHTML=myRosterDbIndex.alias;
    document.getElementById("playerName").innerHTML =myRosterDbIndex.name+" "+myRosterDbIndex.firstname;
    document.getElementById("firstname").innerHTML = "first name: "+myRosterDbIndex.firstname;
    document.getElementById("lastname").innerHTML = "last name: "+myRosterDbIndex.name;
    document.getElementById("age").innerHTML = " age: "+myRosterDbIndex.age;
    document.getElementById("awpLevel").innerHTML = "awp level: "+myRosterDbIndex.awpLevel;
    document.getElementById("rifleLevel").innerHTML = "rifle level: "+myRosterDbIndex.rifleLevel;
    document.getElementById("gamesence").innerHTML = "game sence: "+myRosterDbIndex.gameSence;
    document.getElementById("inteligence").innerHTML = "inteligence: "+myRosterDbIndex.inteligence;
    document.getElementById("description").innerHTML = myRosterDbIndex.bio;
    document.getElementById("playerimage").style.backgroundImage = myRosterDbIndex.playerimage;
}


if(localStorage.getItem("isItRunning") == "true")
{
    console.log("running");
    switch(localStorage.getItem("rosterIndex"))
    {
        case "1": myRosterDbIndex = Peter;break;
        case "2": myRosterDbIndex = Swifferman;break;
        case "3": myRosterDbIndex = Glazer;break;
        case "4": myRosterDbIndex = Elgrandprofeta;break;
    }
    loadRoster()
    rosterLoad = false;
    localStorage.setItem("isItRunning",rosterLoad);
}else
{

    $(document).ready(function(){
        $("#petercuck").click(function(){
        setSelectionRoster(1);
    });
    });
    $(document).ready(function(){
        $("#swifferman").click(function(){
        setSelectionRoster(2);
    });
    });
    $(document).ready(function(){
        $("#glazer").click(function(){
        setSelectionRoster(3);
    });
    });
    $(document).ready(function(){
        $("#elgranprofeta").click(function(){
        setSelectionRoster(4);
    });
    });
}
