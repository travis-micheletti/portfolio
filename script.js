console.log('test')

//setting constants for accessing elements w/ DOM
const mainContent = document.querySelector('#main-content')
const projectsContent = document.querySelector('#projects-content')
const bioContent = document.querySelector('#bio-content')
const resumeContent = document.querySelector('#resume-content')
const contactMeContent = document.querySelector('#contact-me-content')
const homeHead = document.querySelector('#home-head')
const bioHead = document.querySelector('#bio-head')
const resumeHead = document.querySelector('#resume-head')
const projectsHead = document.querySelector('#projects-head')
const projectsDiv = document.querySelector('#projects-div')
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
const sportsResponse = document.querySelector('#sports-response')
const gamingResponse = document.querySelector('#gaming-response')
const foodResponse = document.querySelector('#food-response')
const andResponse = document.querySelector('#and-response')
const colorMode = document.querySelector('#color-mode')
const colorModeText = document.querySelector('#color-mode-text')
const colorModeCircle = document.querySelector('#color-mode-circle')
const bioResponses = document.querySelector('#bio-responses')

//other variables
let currentColorMode = "dark-mode"
//functions
const colorModeClick = () => {
    if (currentColorMode == 'dark-mode') {
        document.body.classList.add('light-mode')
        homeHead.classList.remove('dark-border')
        homeHead.classList.add('light-border')
        colorModeText.innerText = "dark mode"
        colorModeText.classList.remove('color-mode-text-dark')
        colorModeText.classList.add('color-mode-text-light')
        currentColorMode = "light-mode"
        selfie.classList.add('light-mode-selfie')
        colorModeCircle.classList.remove('circle-dark')
        colorModeCircle.classList.add('circle-light')
        bioResponses.classList.remove('bio-responses-dark')
        bioResponses.classList.add('bio-responses-light')
        
    } else {
        document.body.classList.remove('light-mode')
        homeHead.classList.remove('light-border')
        homeHead.classList.add('dark-border')
        colorModeText.innerText = "light mode"
        colorModeText.classList.remove('color-mode-text-light')
        colorModeText.classList.add('color-mode-text-dark')
        currentColorMode = "dark-mode"
        selfie.classList.remove('light-mode-selfie')
        colorModeCircle.classList.remove('circle-light')
        colorModeCircle.classList.add('circle-dark')
        bioResponses.classList.remove('bio-responses-light')
        bioResponses.classList.add('bio-responses-dark')
    }
}
const homeButtonClick = () => {
    homeHead.classList.remove('hide')
    bioHead.classList.add('hide')
    resumeHead.classList.add('hide')
    projectsHead.classList.add('hide')
    contactMeHead.classList.add('hide')
    projectsDiv.classList.add('hide')
    resumeContent.classList.add('hide')
    bioContent.classList.add('hide')
    contactMeContent.classList.add('hide')
    sportsResponse.classList.add('hide')
    gamingResponse.classList.add('hide')
    foodResponse.classList.add('hide')
    andResponse.classList.add('hide')

}
const resumeNavButtonClick = () => {
    homeHead.classList.add('hide')
    bioHead.classList.add('hide')
    resumeHead.classList.remove('hide')
    projectsHead.classList.add('hide')
    contactMeHead.classList.add('hide')
    projectsDiv.classList.add('hide')
    resumeContent.classList.remove('hide')
    bioContent.classList.add('hide')
    contactMeContent.classList.add('hide')
    sportsResponse.classList.add('hide')
    gamingResponse.classList.add('hide')
    foodResponse.classList.add('hide')
    andResponse.classList.add('hide')
}
const projectsNavButtonClick = () => {
    homeHead.classList.add('hide')
    bioHead.classList.add('hide')
    resumeHead.classList.add('hide')
    projectsHead.classList.remove('hide')
    contactMeHead.classList.add('hide')
    projectsDiv.classList.remove('hide')
    resumeContent.classList.add('hide')
    bioContent.classList.add('hide')
    contactMeContent.classList.add('hide')
    sportsResponse.classList.add('hide')
    gamingResponse.classList.add('hide')
    foodResponse.classList.add('hide')
    andResponse.classList.add('hide')
}
const bioNavButtonClick = () => {
    homeHead.classList.add('hide')
    bioHead.classList.remove('hide')
    resumeHead.classList.add('hide')
    projectsHead.classList.add('hide')
    contactMeHead.classList.add('hide')
    projectsDiv.classList.add('hide')
    resumeContent.classList.add('hide')
    bioContent.classList.remove('hide')
    contactMeContent.classList.add('hide')
    sportsResponse.classList.add('hide')
    gamingResponse.classList.add('hide')
    foodResponse.classList.add('hide')
    andResponse.classList.add('hide')
}
const andButtonClick = () => {
    homeHead.classList.add('hide')
    bioHead.classList.remove('hide')
    resumeHead.classList.add('hide')
    projectsHead.classList.add('hide')
    contactMeHead.classList.add('hide')
    projectsDiv.classList.add('hide')
    resumeContent.classList.add('hide')
    bioContent.classList.remove('hide')
    contactMeContent.classList.add('hide')
    sportsResponse.classList.add('hide')
    gamingResponse.classList.add('hide')
    foodResponse.classList.add('hide')
    andResponse.classList.remove('hide')
}
const foodButtonClick = () => {
    homeHead.classList.add('hide')
    bioHead.classList.remove('hide')
    resumeHead.classList.add('hide')
    projectsHead.classList.add('hide')
    contactMeHead.classList.add('hide')
    projectsDiv.classList.add('hide')
    resumeContent.classList.add('hide')
    bioContent.classList.remove('hide')
    contactMeContent.classList.add('hide')
    sportsResponse.classList.add('hide')
    gamingResponse.classList.add('hide')
    foodResponse.classList.remove('hide')
    andResponse.classList.add('hide')
}
const gamingButtonClick = () => {
    homeHead.classList.add('hide')
    bioHead.classList.remove('hide')
    resumeHead.classList.add('hide')
    projectsHead.classList.add('hide')
    contactMeHead.classList.add('hide')
    projectsDiv.classList.add('hide')
    resumeContent.classList.add('hide')
    bioContent.classList.remove('hide')
    contactMeContent.classList.add('hide')
    sportsResponse.classList.add('hide')
    gamingResponse.classList.remove('hide')
    foodResponse.classList.add('hide')
    andResponse.classList.add('hide')
}
const sportsButtonClick = () => {
    homeHead.classList.add('hide')
    bioHead.classList.remove('hide')
    resumeHead.classList.add('hide')
    projectsHead.classList.add('hide')
    contactMeHead.classList.add('hide')
    projectsDiv.classList.add('hide')
    resumeContent.classList.add('hide')
    bioContent.classList.remove('hide')
    contactMeContent.classList.add('hide')
    sportsResponse.classList.remove('hide')
    gamingResponse.classList.add('hide')
    foodResponse.classList.add('hide')
    andResponse.classList.add('hide')
}
const contactMeButtonClick = () => {
    homeHead.classList.add('hide')
    bioHead.classList.add('hide')
    resumeHead.classList.add('hide')
    projectsHead.classList.add('hide')
    contactMeHead.classList.remove('hide')
    projectsDiv.classList.add('hide')
    resumeContent.classList.add('hide')
    bioContent.classList.add('hide')
    contactMeContent.classList.remove('hide')
    sportsResponse.classList.add('hide')
    gamingResponse.classList.add('hide')
    foodResponse.classList.add('hide')
    andResponse.classList.add('hide')
}
//event listeners
homeButton.addEventListener('click', homeButtonClick)
resumeNavButton.addEventListener('click', resumeNavButtonClick)
projectsNavButton.addEventListener('click', projectsNavButtonClick)
bioNavButton.addEventListener('click', bioNavButtonClick)
andButton.addEventListener('click', andButtonClick)
foodButton.addEventListener('click', foodButtonClick)
gamingButton.addEventListener('click', gamingButtonClick)
sportsButton.addEventListener('click', sportsButtonClick)
homeButton.addEventListener('click', clickTest)
contactMeButton.addEventListener('click', contactMeButtonClick)
homeButton.addEventListener('mouseover', applyHover)
colorMode.addEventListener('click', colorModeClick)
// projectOneText.addEventListener('click', clickTest)
// projectTwoText.addEventListener('click', clickTest)
// projectThreeText.addEventListener('click', clickTest)
// projectFourText.addEventListener('click', clickTest)

function clickTest() {
    console.log('click registered')
}
function applyHover() {
    homeButton.classList.toggle('hover')
}