var menuButtonClicked = false;

document.getElementById("menu-button").addEventListener("click", () => {
  if (menuButtonClicked === false) {
    document.getElementById("hidden-item").style.display = "block";
    // document.getElementById("hidden-item").style.visibility = "visible";
  } else if (menuButtonClicked) {
    document.getElementById("hidden-item").style.display = "none";
    // document.getElementById("hidden-item").style.visibility = "hidden";
  }
  menuButtonClicked = !menuButtonClicked;
});
