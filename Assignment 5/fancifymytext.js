function biggerAlert(){
    document.getElementById("textArea").style.fontSize = '24pt';
}


function changeStyle(){
    var textArea = document.getElementById("textArea");
    if(document.getElementById("fancyShmancy").checked){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if(document.getElementById("boringBetty").checked){
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function moo(){
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
    var parts = text.split(".");

    textArea.value = parts.join("-Moo.").trim();
}