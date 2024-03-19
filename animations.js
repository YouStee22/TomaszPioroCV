const timeline1 = gsap.timeline();

const left = document.querySelector('.left');
timeline1.fromTo(left, {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, "<20%");

const rightTop = document.querySelector('.name-header');
timeline1.fromTo(rightTop, {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 1}, "<20%");

const body = document.querySelector('.data');
timeline1.fromTo(body, {y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 1}, "<20%");

// timeline1.fromTo(document.querySelector('.header'), {x: -70, opacity: 0,rotation: -40}, {x: 0, opacity: 1, duration: 1,rotation: 0});


const leftFivs = document.querySelector('.left');
const allElementsInsideHeader = leftFivs.querySelectorAll('h2');

allElementsInsideHeader.forEach(element => {
   
    timeline1.fromTo(element, {x: -70, opacity: 0}, {x: 0, opacity: 1, duration: 0.15});   
 

 });

//PROFILOWE ZDJECIE 
 const allElementsInsideImg = document.querySelectorAll('.data-left');
 
 allElementsInsideImg.forEach(element => {
    const imgs = element.querySelectorAll('img');
   
    timeline1.fromTo(imgs, {x: -70, opacity: 0, rotation: -150}, {x: 0, opacity: 1, duration: 0.10, rotation: 0});    
});

allElementsInsideImg.forEach(element => {
    const text = element.querySelectorAll('div');

    text.forEach(ele => {
        timeline1.fromTo(ele, {x: -70, opacity: 0}, {x: 0, opacity: 1, duration: 0.25}); 
    })
})

//Linie
const vLine = document.querySelectorAll('.lt');
vLine.forEach(element => {
    timeline1.fromTo(element, {x: -70, opacity: 0}, {x: 0, opacity: 1, duration: 0.15});
});
//SKillsTitles
const skillsTitles = document.querySelectorAll('.header-text');
skillsTitles.forEach(element => {
    timeline1.fromTo(element, {x: -70, opacity: 0}, {x: 0, opacity: 1, duration: 0.40});
})










const icon1 = document.getElementById('idea');
const icon2 = document.querySelector('#hands');
const icon3 = document.querySelector('#people');
const icon4 = document.querySelector('#services');

const abilitesIcons = gsap.timeline();

timeline1.fromTo(icon1, {duration: 1.5, x: -40, opacity: 0, rotation: -40}, {x: 0, opacity: 1, rotation: 0});
timeline1.fromTo(icon2, {duration: 1.5, x: -40, opacity: 0, rotation: -40}, {x: 0, opacity: 1, rotation: 40}, "<50%");
timeline1.fromTo(icon3, {duration: 1.5, x: -40, opacity: 0, rotation: -40}, {x: 0, opacity: 1, rotation: 0},"<50%");
timeline1.fromTo(icon4, {duration: 1.5, x: -40, opacity: 0, rotation: -40}, {x: 0, opacity: 1, rotation: 0},"<50%");



const titles = document.querySelectorAll('.items-text');

titles.forEach(title => {
// Target the divs inside each 'items-text' element
const divsInsideItemText = title.querySelectorAll('div');

divsInsideItemText.forEach(div => {
        // Perform GSAP animation on each div
        timeline1.fromTo(div, {x: -40, opacity: 0 }, { x: 0, opacity: 1 }, "<30%");
    });
});

const additionalSkills = document.querySelector('#additionalSkills');

timeline1.fromTo(additionalSkills, {x: -40, opacity: 0 }, { x: 0, opacity: 1 }, "<30%");







const firstLanguags = document.querySelectorAll('.abilities');
firstLanguags.forEach(element => {
    const firstDiv = element.querySelector('div:first-child');
    timeline1.fromTo(firstDiv, {x: -70, opacity: 0}, {x: 0, opacity: 1, duration: 0.25}, "<50%");
});

firstLanguags.forEach(element => {
    const linesV = element.querySelector('div:nth-child(2)');
    timeline1.fromTo(linesV, {x: -70, opacity: 0}, {x: 0, opacity: 1, duration: 0.25}, "<50%");
});







const timeLine2 = gsap.timeline();

const pop1 = document.querySelector('.pop1');
const pop2 = document.querySelector('.pop2');
const pop3 = document.querySelector('.pop3');
const pop4 = document.querySelector('.pop4');


timeLine2.to(pop1, { duration: 1.5, x: 60, delay: 0 });
timeLine2.to(pop2, { duration: 1.5, x: 100, delay: 0 }, "-=1.5");
timeLine2.to(pop3, { duration: 1.5, x: 80, delay: 0 }, "-=1.5");
timeLine2.to(pop4, { duration: 1.5, x: 70, delay: 0 }, "-=1.5");

timeline1.add(timeLine2);



const timeLine3 = gsap.timeline();

const daty = document.querySelectorAll('.experience');
daty.forEach(element => {
    const firstDiv = element.querySelector('div:first-child');
    timeLine3.fromTo(firstDiv, {x: -70, opacity: 0}, {x: 0, opacity: 1, duration: 0.40}, "<50%");
});
daty.forEach(element => {
    const firstDiv = element.querySelector('div:nth-child(2)');
    timeLine3.fromTo(firstDiv, {x: -70, opacity: 0}, {x: 0, opacity: 1, duration: 0.40}, "<50%");
});



//CERTYFIKATY
const certyfikatyContainer = document.querySelector('.certyfikaty');
const allDivs = certyfikatyContainer.querySelectorAll('div');
for (let i = 1; i < allDivs.length; i++) {
    timeLine3.fromTo(allDivs[i], {x: -70, opacity: 0}, {x: 0, opacity: 1, duration: 0.40}, "<50%");
}

timeline1.add(timeLine3);