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

// tech stack section code

var languageTitleModal = document.getElementById("project-lan");
var languageDescriptionModal = document.getElementById("project-desc");
var listitems = document.getElementById("list-items");

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

const projects = {
  Python: [
    "Twitter Scraper",
    "SEO Tags Scraper",
    "Automating Online Classes",
    "",
  ],
  WebD: ["Portfolio Website", "Minions Language Translate", "Snake Game"],
  Java: ["Data Structures and Algorithms", "Competitive Coding"],
  IoT: ["Smart Water Management System", "", ""],
  ReactJS: ["Will start working on projects soon"],
};

const BGs = Object.keys(techBG);

var count = 0;
ChangeData();

function ChangeData() {
  var modalIsOpen = modalBox.classList.contains("modal-visibility");

  if (modalIsOpen) {
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

      languageTitleModal.innerHTML = `
      <h1 class="font-formatted-2" style="color: rgb(54, 54, 54)">
      ${BGs[count]}
      <div class="divider-grey"></div>
      </h1>
      `;

      var projectsArr = projects[BGs[count]];
      listitems.innerHTML = "";

      for (i = 0; i < projectsArr.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = projectsArr[i];
        listitems.appendChild(li);
      }

      count += 1;
    }
  } else {
    count = count;
  }
  setTimeout(ChangeData, 3000);
}
