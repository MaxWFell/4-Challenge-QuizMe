function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
}
 //sets the highscores in a descending order
 highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function(score) {
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    var olEl = document.createElement("highscores");
    olEl.appendChild(liTag);
  });

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

//makes the function run
 printHighscores();