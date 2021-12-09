let h1 = document.querySelector(`h1`);
document.body.style.transitionDuration = `0.5s`;
h1.style.transitionDuration = `0.5s`;

let button = document.querySelector(`#button`);
button.addEventListener('click',updateColors);

function updateColors(){
    let colors = getRandomColors();
    document.body.style.backgroundColor = `${colors.main}`;
    h1.style.color = `${colors.alt2}`;
    h1.innerText = `background color = ${colors.main}, text color = ${colors.alt}`;
    h2.style.color = `${colors.alt}`;
    h3.style.color = `${colors.alt}`;
    h2.style.textShadow.color = ``;
    h2.style.textShadow = `5px 5px 10px ${colors.shadow}`;
    h3.style.textShadow = `5px 5px 10px ${colors.shadow}`;
}

function getRandomColors(){
    let randColors = {r: getNumber(), g: getNumber(), b: getNumber()};
    let main = `rgb(${randColors.r},${randColors.g},${randColors.b})`;
    
    let inverseColors = {r: 255 - randColors.r, g: 255 - randColors.g, b: 255 - randColors.b};
    let alt = `rgb(${inverseColors.r},${inverseColors.g},${inverseColors.b})`;
    let shadow = `rgba(${inverseColors.r},${inverseColors.g},${inverseColors.b},0.75)`;

    // alternative method: takes the average of randColors and checks if it is closer to white or black and then gives the opposite for text.
    let alt2 = '';
    if((randColors.r + randColors.g + randColors.b)/ 3 >= (255/2)){
        alt2 = `rgb(0,0,0)`;
    } else {
        alt2 = `rgb(255,255,255)`;
    }
    
    
    return {main, alt, alt2, shadow};
}

function getNumber(){
    return Math.floor(Math.random() * 256);
}

const delay = 0.5;
const input = document.querySelector(`input`);
const h2 = document.querySelector(`h2`);
const h3 = document.querySelector(`h3`);
function setDefaultStyling(){
    h2.style.padding = `0`;
    h2.style.margin = `0`;
    h2.style.textShadow = `5px 5px 10px rgba(0,0,0,0.75)`;
    h2.style.transition = `opacity ${delay}s, color ${delay}s`;
    h2.style.whiteSpace = `nowrap`;
    h3.style.padding = `0`;
    h3.style.margin = `0`;
    h3.style.textShadow = `5px 5px 10px rgba(0,0,0,0.75)`;
    h3.style.transition = `opacity ${delay}s, color ${delay}s`;
    h3.style.whiteSpace = `nowrap`;
}
setDefaultStyling();

input.addEventListener(`input`, function () {
    console.log("test0");
    h2.style.opacity = `0`;
    h3.style.opacity = `0`;
    setTimeout(() => { 
        console.log("test1");
        h2.innerText = input.value.toLocaleLowerCase();
        h2.style.fontSize = `${(50 / (input.value.length*2)) + 10}vw`;
        //get computed fontsize in pixels from h2
        let lineHeight = ((parseFloat(getComputedStyle(h2).fontSize))/1.75) + 100;
        h2.style.lineHeight = `${lineHeight}px`;
        h2.style.opacity = `1`;
        h3.innerText = input.value.toLocaleLowerCase();
        h3.style.fontSize = `${(100 / (input.value.length)) + 20}vw`;
        //get computed fontsize in pixels from h3
        let lineHeight2 = ((parseFloat(getComputedStyle(h3).fontSize))/1.75) -100;
        h3.style.lineHeight = `${lineHeight2}px`;
        h3.style.opacity = `0.25`; 
    }, (delay * 1000));
    console.log("test2");

    
})