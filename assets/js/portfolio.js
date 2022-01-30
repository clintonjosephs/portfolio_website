/** Create data object */
const projects = [
  {
    name: "LeaderBoard",
    details: ["Fun and Games", "Full Stack Dev", "2022"],
    smallDescription:
      "The leaderboard website displays scores submitted by different players. It also allows you to submit your score.",
    bigDescription:
      "Built for fun and game activities! you can submit scores of players, create a new game, and refresh to see who is on top of the leaderboard. It was built with JavaScript, HTML, and CSS. Thanks to the central LeaderBoard API service all data is preserved",
    imageUrlMobile: "assets/images/portfolio_snapshoot/leaderboard/presentation.gif",
    imageUrlDesktop: "assets/images/portfolio_snapshoot/leaderboard/presentation.gif",
    technologiesPopup: ["html", "bootstrap", "css", "javaScript", "webpack", "async", "await"],
    technologies: ["html", "css", "javaScript"],
    popupImageUrlMobile:
      "assets/images/portfolio_snapshoot/leaderboard/presentation.gif",
    popupImageUrlDesktop:
      "assets/images/portfolio_snapshoot/leaderboard/presentation.gif",
    linkLive: "https://clintonjosephs.github.io/LeaderBoard/",
    linkSource: "https://github.com/clintonjosephs/LeaderBoard.git",
  },
  {
    name: "To Do List App",
    details: ["Today's todo", "Front End Dev", "2022"],
    smallDescription:
      '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you manage them too!',
    bigDescription:
      "In this project, you will get a simple HTML list of To Do tasks. It is built using webpack and served by a webpack dev server. The list is styled according to the specifications listed by the minimalist website. The CRUD (create, update, delete) methods for the todo tasks are implemented. All the elements of the user interface are fully functional and the application is completed. You will also be able to mark task completion by selecting the corresponding checkbox (or undo it by unchecking the checkbox). The updated tasks list will be stored in localstorage.",
    imageUrlMobile: "assets/images/portfolio_snapshoot/todo/todo_mobile.png",
    imageUrlDesktop: "assets/images/portfolio_snapshoot/todo/todo_desktop.png",
    popupImageUrlMobile:
      "assets/images/portfolio_snapshoot/todo/todo_mobile.png",
    popupImageUrlDesktop:
      "assets/images/portfolio_snapshoot/todo/todo_popup.png",
    technologiesPopup: [
      "html",
      "css",
      "javaScript",
      "ES6",
      "WebPack",
      "HTML & CSS & JavaScript Linters",
    ],
    technologies: ["html", "css", "javaScript"],
    linkLive: "https://clintonjosephs.github.io/to-do-list/",
    linkSource: "https://github.com/clintonjosephs/to-do-list.git",
  },
  {
    name: "Facebook 360",
    details: ["FACEBOOK", "Full Stack Dev", "2015"],
    smallDescription:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    bigDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrlMobile: "assets/images/portfolio_snapshoot/snapshoot3.png",
    imageUrlDesktop: "assets/images/portfolio_snapshoot/snapshoot_desktop3.png",
    technologiesPopup: ["html", "Ruby on rails", "css", "javaScript"],
    technologies: ["html", "Ruby on rails", "css", "javaScript"],
    popupImageUrlMobile:
      "assets/images/portfolio_snapshoot/modal_snapshoot_mobile.png",
    popupImageUrlDesktop:
      "assets/images/portfolio_snapshoot/modal_snapshoot.png",
    linkLive: "",
    linkSource: "",
  },
  {
    name: "Uber navigation",
    details: ["Uber", "Lead developer", "2018"],
    smallDescription:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    bigDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrlMobile: "assets/images/portfolio_snapshoot/snapshoot4.png",
    imageUrlDesktop: "assets/images/portfolio_snapshoot/snapshoot_desktop4.png",
    technologiesPopup: ["html", "Ruby on rails", "css", "javaScript"],
    technologies: ["html", "Ruby on rails", "css", "javaScript"],
    popupImageUrlMobile:
      "assets/images/portfolio_snapshoot/modal_snapshoot_mobile.png",
    popupImageUrlDesktop:
      "assets/images/portfolio_snapshoot/modal_snapshoot.png",
    linkLive: "",
    linkSource: "",
  },
];

/** Create data object end */

/** Set up mobile menu start */

const menuOverlay = document.querySelector("#menu-overlay");
const mobileMenuButton = document.querySelector("#mobileMenuButton");

function mobileMenuToogle() {
  menuOverlay.style.width = "100%";
}

function closeMobileMenu() {
  menuOverlay.style.width = "0";
}

mobileMenuButton.addEventListener("click", () => {
  mobileMenuToogle();
});

const mobileMenuLinks = document.querySelectorAll(".menu-mobile li a");
for (let i = 0; i < mobileMenuLinks.length; i += 1) {
  mobileMenuLinks[i].addEventListener("click", () => {
    closeMobileMenu();
  });
}

/** Set up mobile menu finish */

/** Sort out technologies */
function technologies(popup, techData) {
  let m = 1;
  let technologiesPopup = "";
  let technologies = "";
  techData.forEach((tech) => {
    if (!popup) {
      if (tech.toLowerCase().includes("ruby")) {
        technologies += `<li class="lang ruby">${tech}</li>`;
      } else {
        technologies += `<li class="lang">${tech}</li>`;
      }
    } else {
      if (m <= 3) {
        technologies += `<li class="lang">${tech}</li>`;
      } else {
        technologiesPopup += `<li class="lang ruby">${tech}</li>`;
      }
      m += 1;
    }
  });
  return [technologies, technologiesPopup];
}

/** Sort out technologies */

/** * Dynamically adding works-flex items in works section start */
let projectsItemsBuild = "";
for (let i = 0; i < projects.length; i += 1) {
  // determine flex postion of image and work description
  let flexPosition = "start";
  let flexPositionReverse = "end";
  if (i % 2 !== 0) {
    flexPosition = "end";
    flexPositionReverse = "start";
  }

  // further loop within the parent loop to break and read technologies
  const techData = technologies(false, projects[i].technologies);

  projectsItemsBuild += `<div class="works-flex">
                          <div class="works-flex-item work-image ${flexPosition}">
                              <img src="${projects[i].imageUrlMobile}" class="img-style" alt="${projects[i].name} project screenshot"/>
                              <img src="${projects[i].imageUrlDesktop}" class="img-style-desktop" alt="${projects[i].name} project screenshot"/>
                          </div>
                          <div class="wcontainer ${flexPositionReverse}">
                              <div class="works-flex-item">
                                  <h3 class="intro-text-works">${projects[i].name}</h3>
                              </div>
                              <ul class=" works-flex-item titles-container">
                                  <li class="list-main">${projects[i].details[0]}</li>
                                  <li class="titles-item">${projects[i].details[1]}</li>
                                  <li class="titles-item">${projects[i].details[2]}</li>
                              </ul>
                              <p class="works-flex-item works-description">
                                  ${projects[i].smallDescription}
                              </p>
                              <div class="works-flex-item">
                                  <ul class="lang-container">
                                      ${techData[0]}
                                  </ul>
                              </div>
                              <div class="works-flex-item">
                                  <div class="btn-see">
                                      <a href="javascript:void(0)" class="btn-see-project" project-index="${i}">See project</a>
                                  </div>
                              </div>
                          </div>
                        </div>`;
}

document.querySelector("#portfolio").innerHTML = projectsItemsBuild;

/** * Dynamically adding works-flex items in works section end */
function displayProjectDescriptionPopup(value) {
  const techData = technologies(true, projects[value].technologiesPopup);
  const projectPopup = document.querySelector("#projectPopup");
  const popupContentBuilder = `<div class="popup-content">
                                   <div class="popup-header">
                                       <div class="popup-title">
                                           <div class="topic">
                                               <h1>${projects[value].name}</h1>
                                               <span class="close-popup">&times;</span>
                                           </div>
                                           <ul>
                                           <li class="list-main">${projects[value].details[0]}</li>
                                           <li class="titles-item">${projects[value].details[1]}</li>
                                           <li class="titles-item">${projects[value].details[2]}</li>
                                           </ul>
                                       </div>
                                   </div>
                                   <div class="popup-body">
                                       <div class="work-image">
                                           <img src="${projects[value].popupImageUrlMobile}" class="img-style" alt="${projects[value].name} project screenshot"/>
                                           <img src="${projects[value].popupImageUrlDesktop}" class="img-style-desktop-popup" alt="${projects[value].name} project screenshot"/>
                                       </div>
                                       <div class="description-container">
                                           <div class="project-text intro-message">
                                               <p>
                                               ${projects[value].bigDescription}
                                               </p>
                                           </div>
                                           <div class="project-tags">
                                               <div class="tags">
                                                   <ul>
                                                    ${techData[0]}
                                                   </ul>
                                                   <ul>
                                                    ${techData[1]}
                                                   </ul>
                                               </div>
                                               <div class="tags-buttons">
                                                   <a href="${projects[value].linkLive}" class="btn-see-project">See live <i class="fa fa-rss"></i></a>
                                                   <a href="${projects[value].linkSource}" class="btn-see-project">See source <i class="fa fa-github"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>`;
  projectPopup.innerHTML = popupContentBuilder;
  projectPopup.style.display = "block";
  const closePopup = document.querySelector(".close-popup");
  closePopup.addEventListener("click", () => {
    projectPopup.style.display = "none";
  });
}
const seeProjectButtons = document.querySelectorAll(".btn-see-project");
for (let c = 0; c < seeProjectButtons.length; c += 1) {
  seeProjectButtons[c].addEventListener("click", () => {
    displayProjectDescriptionPopup(
      seeProjectButtons[c].getAttribute("project-index")
    );
  });
}
