//DOM manipulation technique 
//.querySelectorAll('Grabs All Elements')
//.querySelector('Grabs The First Instance of that Element')
const panels = document.querySelectorAll('.flex-item');
//code for rotating nav-bar 
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container-all');

//JS CODE FOR VANISHING SEARCH BUTTON
const search = document.querySelector('.search')
const buttonSearch = document.getElementById('search-btn')
const input = document.querySelector('.input')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        //add a class of active 
        panel.classList.add('active');
    })
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
};

open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));

buttonSearch.addEventListener('click', () => {
    search.classList.toggle('active');
    /*brings our cursor to our search button when the search image is pressed*/
    input.focus();
})