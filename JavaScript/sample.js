document.getElementById("FirstAnswerButton").onclick = function() {
    if(document.getElementById("FirstAnswerText").value=="1582"){
        document.getElementById("FirstOutputO").innerHTML = "正解！";
    }else{
        document.getElementById("FirstOutputO").innerHTML="不正解！";
    }
}

document.getElementById("SecondAnswer").onclick = function() {
    document.getElementById("SecondOutput").innerHTML = "正解！"
};









