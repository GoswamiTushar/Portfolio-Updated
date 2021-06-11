var menuButtonClicked = false;

document.getElementById("menu-button").addEventListener("click", () => {
  if (menuButtonClicked === false) {
    document.getElementById("hidden-item").style.display = "block";
  } else if (menuButtonClicked) {
    document.getElementById("hidden-item").style.display = "none";
  }
  menuButtonClicked = !menuButtonClicked;
});

const techBG = {
  Python: "url(../images/projects/bg1.png)",
  WebD: "url(../images/projects/bg2.png)",
  Java: "url(../images/projects/bg3.png)",
  IoT: "url(../images/projects/bg4.png)",
  ReactJS: "url(../images/projects/bg5.png)",
};

const BGs = Object.keys(techBG);
var count = 0;
//
function changeBackground() {
  if (count < BGs.length) {
    document.getElementById("tech-stack").style.backgroundImage =
      techBG[BGs[count]];
    document.getElementById("lan-title").innerHTML = `
    <h1 class="font-formatted-1">${BGs[count]}
    <div class="divider-grey"></div></h1>
    `;
    count += 1;
  } else if (count === BGs.length) {
    count = 0;
  }
  setTimeout(changeBackground, 3000);
}

changeBackground();
