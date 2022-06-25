console.log('test')

//setting constants for accessing elements w/ DOM
const mainContent = document.querySelector('#main-content')
const projectsContent = document.querySelector('#projects-content')
const bioContent = document.querySelector('#projects-content')
const resumeContent = document.querySelector('#resume-content')
const contactMeContent = document.querySelector('contact-me-content')
const homeHead = document.querySelector('#home-head')
const bioHead = document.querySelector('#bio-head')
const resumeHead = document.querySelector('#resume-head')
const projectsHead = document.querySelector('#projects-head')
const contactMeHead = document.querySelector('#contact-me-head')
const brandStatement = document.querySelector('#brand-statement')
const bioPageButtons = document.querySelector('#bio-buttons')
const sportsButton = document.querySelector('#sports-button')
const gamingButton = document.querySelector('#gaming-button')
const foodButton = document.querySelector('#food-button')
const andButton = document.querySelector('#and-button')
const selfie = document.querySelector('#selfie')
const navLinks = document.querySelector('#nav-links')
const navButtons = document.querySelector('#nav-buttons')
const bioNavButton = document.querySelector('#bio-button')
const projectsNavButton = document.querySelector('#projects-button')
const resumeNavButton = document.querySelector('#resume-button')
const homeButton = document.querySelector('#home-button')
const contactMeButton = document.querySelector('#contact-me-button')
const projectOneText = document.querySelector('#project-one')
const projectTwoText = document.querySelector('#project-two')
const projectThreeText = document.querySelector('#project-three')
const projectFourText = document.querySelector('#project-four')

//other variables
//functions

//event listeners
homeButton.addEventListener('click', clickTest)
resumeNavButton.addEventListener('click', clickTest)
projectsNavButton.addEventListener('click', clickTest)
bioNavButton.addEventListener('click', clickTest)
andButton.addEventListener('click', clickTest)
foodButton.addEventListener('click', clickTest)
gamingButton.addEventListener('click', clickTest)
sportsButton.addEventListener('click', clickTest)
homeButton.addEventListener('click', clickTest)
contactMeButton.addEventListener('click', clickTest)
projectOneText.addEventListener('click', clickTest)
projectTwoText.addEventListener('click', clickTest)
projectThreeText.addEventListener('click', clickTest)
projectFourText.addEventListener('click', clickTest)

function clickTest() {
    console.log('click registered!')
}