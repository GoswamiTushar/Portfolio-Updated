// Menu button code block
var menuButtonClicked = false;

document.getElementById("menu-button").addEventListener("click", () => {
  if (menuButtonClicked === false) {
    document.getElementById("hidden-item").style.display = "block";
  } else if (menuButtonClicked) {
    document.getElementById("hidden-item").style.display = "none";
  }
  menuButtonClicked = !menuButtonClicked;
});

// tech stack section code

const techBG = {
  Python: "url(../images/projects/low-qual/bg1.png)",
  WebD: "url(../images/projects/low-qual/bg2.png)",
  Java: "url(../images/projects/low-qual/bg3.png)",
  IoT: "url(../images/projects/low-qual/bg4.png)",
  ReactJS: "url(../images/projects/low-qual/bg5.png)",
};
const techDesc = {
  Python:
    "Have done numerous projects on Web-Automation, Web-Scraping and Data Mining along with handling API's",
  WebD: "Have made projects such as Snake Game, Portfolio Website from scratch along with writing component libraties",
  Java: "Currently doing Competitive programming with Java along with Learning JavFX",
  IoT: "Familiar with Arduino platform, RaspberryPi, Firebase, sensor interfacing & Have designed Smart Water-Management Sys",
  ReactJS:
    "Currently dedicating time to learn ReactJS and build apps along with tutorials",
};

const BGs = Object.keys(techBG);

var count = 0;
changeBackground();

function changeBackground() {
  if (count === BGs.length) {
    count = 0;
  } else if (count < BGs.length) {
    document.getElementById("tech-stack").style.backgroundImage =
      techBG[BGs[count]];

    document.getElementById("lan-title").innerHTML = `
    <h1 class="font-formatted-2" style="color: rgb(54, 54, 54)">
    ${BGs[count]}
    <div class="divider-grey"></div>
    </h1>`;

    document.getElementById("lan-desc").innerHTML = `
    <p class="font-formatted-1" style="color: rgb(54, 54, 54); font-weight: 000">
    ${techDesc[BGs[count]]}</p>`;

    count += 1;
  }
  setTimeout(changeBackground, 3000);
}



// Modal block

var modalOpen = document.getElementById("open-modal");
var modalClose = document.getElementById("close-modal");
var modalBox = document.getElementById("modal");

modalOpen.addEventListener("click", () => {
  modalBox.classList.toggle("modal-visibility");
});

modalClose.addEventListener("click", () => {
  modalBox.classList.toggle("modal-visibility");
});
