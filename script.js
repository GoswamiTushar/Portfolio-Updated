var clicked = false;

function checkClicked() {
  if (clicked == false) {
    document.getElementById("links").style.display = "block";
    document.getElementById("to-hide-1").style.display = "none";
    document.getElementById("to-hide-2").style.display = "none";
  } else if (clicked) {
    document.getElementById("links").style.display = "none";
    document.getElementById("to-hide-1").style.display = "block";
    document.getElementById("to-hide-2").style.display = "block";
  }
  clicked = !clicked;
}

document.getElementById("menu-button").addEventListener("click", checkClicked);
// document
//   .getElementById("menu-button")
//   .addEventListener("mouseover", checkClicked);

document
  .getElementsByClassName("profile-photo")[0]
  .addEventListener("mouseover", () => {
    document.getElementById("changing-background").style.backgroundImage =
      "url(./Images/blur.jpg)";
  });
document
  .getElementsByClassName("profile-photo")[0]
  .addEventListener("mouseout", () => {
    document.getElementById("changing-background").style.background = "white";
  });
