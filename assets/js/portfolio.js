/**Set up mobile menu start */

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

/**Set up mobile menu finish */

/**Sort out technologies */
function technologies(popup, techData) {
  let m = 1;
  let technologiesPopup = '';
  let technologies = '';
  techData.forEach(tech => {
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
      m++;
    }
  });
  return [technologies, technologiesPopup];
}

/** Sort out technologies */

/*** Dynamically adding works-flex items in works section start*/
let projectsItemsBuild = '';
for (let i = 0; i < projects.length; i+=1) {
  
  //determine flex postion of image and work description
  let flexPosition = 'start';
  let flexPositionReverse = 'end';
  if (i % 2 !== 0) {
    flexPosition = 'end';
    flexPositionReverse = 'start'
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

/*** Dynamically adding works-flex items in works section end*/

