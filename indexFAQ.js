//code for rotating nav-bar
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container-all');

//JS CODE FOR VANISHING SEARCH BUTTON
const search = document.querySelector('.search');
const buttonSearch = document.getElementById('search-btn');
const input = document.querySelector('.input');

open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));

buttonSearch.addEventListener('click', () => {
    search.classList.toggle('active');
    /*brings our cursor to our search button when the search image is pressed*/
    input.focus();
});

//Code for only indexBronx.js
const loadText = document.querySelector('.loading-text');
const backGround = document.getElementById('section-background');

let load = 0;

// .setInterval is (function,ms duration delay)
let int = setInterval(blurring, 30)

function blurring() {
    load++;
    if (load > 99) {
        //taken the load value of larger than 99 we stop it with the clearInterval function
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;
    //we want it to go from opacity 1 to 0 
    //we need to map this 
    //referenced the stackOverFlow to map a range of numbers to another range of numbers
    // o to 100 from 100 to 0
    loadText.style.opacity = scaler(load, 0, 100, 1, 0);
    backGround.style.filter = `blur(${scaler(load,0,100,30,0)})`
}

const scaler = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}