function bigger(){
    document.getElementById("teext").style.fontSize = "24pt";
}

function checking(){
    if (document.getElementById("changeStyle").checked)
    {
        document.getElementById("teext").style.textDecoration="underline";
        document.getElementById("teext").style.color="green";
        document.getElementById("teext").style.textDecoration="blink"
        document.getElementById("teext").style.textDecoration="line-through"
        document.getElementById("teext").style.fontStyle="italic";

    }
    else 
    {
        document.getElementById("teext").style.textDecoration="none";
        document.getElementById("teext").style.color="black";
        document.getElementById("teext").style.fontStyle="";
    }    
}

function snoopy(){
    document.getElementById("teext").value = document.getElementById("teext").value.toUpperCase();
    document.getElementById("teext").value = document.getElementById("teext").value.split(".").join("-izzle.");
}