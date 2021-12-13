/** Create data object */

const projects = [{
  name: 'Tonic',
  details: ['CANOPY', 'Back End Dev', '2015'],
  smallDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageUrlMobile: 'assets/images/portfolio_snapshoot/snapshoot1.png',
  imageUrlDesktop: 'assets/images/portfolio_snapshoot/snapshoot_desktop1.png',
  popupImageUrlMobile: 'assets/images/portfolio_snapshoot/modal_snapshoot_mobile.png',
  popupImageUrlDesktop: 'assets/images/portfolio_snapshoot/modal_snapshoot.png',
  technologiesPopup: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  technologies: ['html', 'css', 'javaScript'],
  linkLive: '',
  linkSource: '',
},
{
  name: 'Multi-Post Stories',
  details: ['FACEBOOK', 'Full Stack Dev', '2015'],
  smallDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageUrlMobile: 'assets/images/portfolio_snapshoot/snapshoot2.png',
  imageUrlDesktop: 'assets/images/portfolio_snapshoot/snapshoot_desktop2.png',
  technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
  technologies: ['html', 'css', 'javaScript'],
  popupImageUrlMobile: 'assets/images/portfolio_snapshoot/modal_snapshoot_mobile.png',
  popupImageUrlDesktop: 'assets/images/portfolio_snapshoot/modal_snapshoot.png',
  linkLive: '',
  linkSource: '',
},
{
  name: 'Facebook 360',
  details: ['FACEBOOK', 'Full Stack Dev', '2015'],
  smallDescription: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageUrlMobile: 'assets/images/portfolio_snapshoot/snapshoot3.png',
  imageUrlDesktop: 'assets/images/portfolio_snapshoot/snapshoot_desktop3.png',
  technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
  technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  popupImageUrlMobile: 'assets/images/portfolio_snapshoot/modal_snapshoot_mobile.png',
  popupImageUrlDesktop: 'assets/images/portfolio_snapshoot/modal_snapshoot.png',
  linkLive: '',
  linkSource: '',
},
{
  name: 'Uber navigation',
  details: ['Uber', 'Lead developer', '2018'],
  smallDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageUrlMobile: 'assets/images/portfolio_snapshoot/snapshoot4.png',
  imageUrlDesktop: 'assets/images/portfolio_snapshoot/snapshoot_desktop4.png',
  technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
  technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  popupImageUrlMobile: 'assets/images/portfolio_snapshoot/modal_snapshoot_mobile.png',
  popupImageUrlDesktop: 'assets/images/portfolio_snapshoot/modal_snapshoot.png',
  linkLive: '',
  linkSource: '',
}];

/** Create data object end */

/** Set up mobile menu start */

const menuOverlay = document.querySelector('#menu-overlay');
const mobileMenuButton = document.querySelector('#mobileMenuButton');

function mobileMenuToogle() {
  menuOverlay.style.width = '100%';
}

function closeMobileMenu() {
  menuOverlay.style.width = '0';
}

mobileMenuButton.addEventListener('click', () => {
  mobileMenuToogle();
});

const mobileMenuLinks = document.querySelectorAll('.menu-mobile li a');
for (let i = 0; i < mobileMenuLinks.length; i += 1) {
  mobileMenuLinks[i].addEventListener('click', () => {
    closeMobileMenu();
  });
}

/** Set up mobile menu finish */

/** Sort out technologies */
function technologies(popup, techData) {
  let m = 1;
  let technologiesPopup = '';
  let technologies = '';
  techData.forEach((tech) => {
    if (!popup) {
      if (tech.toLowerCase().includes('ruby')) {
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
      m+=1;
    }
  });
  return [technologies, technologiesPopup];
}

/** Sort out technologies */

/** * Dynamically adding works-flex items in works section start */
let projectsItemsBuild = '';
for (let i = 0; i < projects.length; i += 1) {
  // determine flex postion of image and work description
  let flexPosition = 'start';
  let flexPositionReverse = 'end';
  if (i % 2 !== 0) {
    flexPosition = 'end';
    flexPositionReverse = 'start';
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
                                      <a href="#" class="btn-see-project" project-index="${i}">See project</a>
                                  </div>
                              </div>
                          </div>
                        </div>`;
}

document.querySelector('#portfolio').innerHTML = projectsItemsBuild;

/** * Dynamically adding works-flex items in works section end */
function displayProjectDescriptionPopup(value) {
  const techData = technologies(true, projects[value].technologiesPopup);
  const projectPopup = document.querySelector('#projectPopup');
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
  projectPopup.style.display = 'block';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    projectPopup.style.display = 'none';
  });
}
const seeProjectButtons = document.querySelectorAll('.btn-see-project');
for (let c = 0; c < seeProjectButtons.length; c += 1) {
  seeProjectButtons[c].addEventListener('click', () => {
    displayProjectDescriptionPopup(seeProjectButtons[c].getAttribute('project-index'));
  });
}
