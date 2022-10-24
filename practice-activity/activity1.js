score=0;

function updatethescore()
{
    score=score+1;
    document.getElementById("score").innerHTML = "Score: " + score;
}

function savescore()
{
    localStorage.setItem("score",score);
}

function nextpage()
{
    window.location="activity2.html";
}