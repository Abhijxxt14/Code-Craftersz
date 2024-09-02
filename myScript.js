const body = document.querySelector('body');

const aboutUsButton = document.querySelector('button:nth-child(2)');
const aboutUsDiv = document.querySelector('.about-us');

const servicesButton = document.querySelector('button:nth-child(3)'); 
const servicesSection = document.querySelector('.Services');

const whyUsButton = document.querySelector('button:nth-child(4)'); 
const whyUsSection = document.querySelector('.Why-us'); 

const workTogetherButton = document.querySelector('button:nth-child(5)'); 
const workTogetherSection = document.querySelector('.work-together'); 
const sidebarButtons = document.querySelectorAll('.sidebar button');
let delay = 0;
sidebarButtons.forEach((button) => {
  setTimeout(() => {
    button.classList.add('appear');
    if (button === sidebarButtons[1]) { 
      button.addEventListener('click', () => {
        const aboutUsTop = aboutUsDiv.offsetTop;
        window.scrollTo({ top: aboutUsTop, behavior: 'smooth' });
      });
    } else if (button === sidebarButtons[2]) { 
      button.addEventListener('click', () => {
        const servicesTop = servicesSection.offsetTop;
        window.scrollTo({ top: servicesTop, behavior: 'smooth' });
      });
    } else if (button === sidebarButtons[3]) { 
      button.addEventListener('click', () => {
        const whyUsTop = whyUsSection.offsetTop;
        window.scrollTo({ top: whyUsTop, behavior: 'smooth' });
      });
    } else if (button === sidebarButtons[4]) { 
      button.addEventListener('click', () => {
        const workTogetherTop = workTogetherSection.offsetTop;
        window.scrollTo({ top: workTogetherTop, behavior: 'smooth' });
      });
    }
  }, delay);
  delay += 3000;
});

function checkScroll() {
  const scrollPosition = window.scrollY + window.innerHeight;
  const aboutUsPosition = aboutUsDiv.offsetTop;
  const servicesPosition = servicesSection.offsetTop;
  const whyUsPosition = whyUsSection.offsetTop;
  const workTogetherPosition = workTogetherSection.offsetTop + workTogetherSection.offsetHeight / 2;

  if (scrollPosition > aboutUsPosition + 100 && scrollPosition < servicesPosition) {
    aboutUsDiv.classList.add('appear');
    body.style.backgroundImage = 'url("./abt us.jpg")';
  } else if (scrollPosition > servicesPosition && scrollPosition < whyUsPosition) {
    servicesSection.classList.add('appear');
    body.style.backgroundImage = 'url("./services.jfif")';
  } else if (scrollPosition > whyUsPosition && scrollPosition < workTogetherPosition) {
    whyUsSection.classList.add('appear');
    body.style.backgroundImage = 'url("./why.jpg")';
  } else if (scrollPosition > workTogetherPosition - workTogetherSection.offsetHeight / 2) {
    workTogetherSection.classList.add('appear');
    body.style.backgroundImage = 'url("./join.jpg")';
  } else {
    body.style.backgroundImage = 'url("./download.jpg")';
  }
}
function redirectToJoiningPage() {
  window.location.href = 'joining.html';
}

window.addEventListener('scroll', checkScroll);
