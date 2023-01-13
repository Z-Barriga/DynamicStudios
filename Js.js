// Select all buttons
const buttons = document.querySelectorAll('button');
// Select all sections
const sections = document.querySelectorAll('.section');

// Add event listener to all buttons
buttons.forEach(button => {
    button.addEventListener('click', e => {
        // Remove active class from all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        // Add active class to the corresponding section based on the button clicked
        document.getElementById(e.target.id.replace('-button','')).classList.add('active');
    });
});
// Add click event listener to all the sections
sections.forEach(section => {
    section.addEventListener('click', e => {
        // Remove the active class from all sections
        sections.forEach(section => section.classList.remove('active'));
        // Add the active class to the clicked section
        e.target.classList.add('active');
    });
});
// Add a function that handle the sections switching

let currentSection = 0;

function switchSection(direction) {
    sections[currentSection].classList.remove('active');
    currentSection += direction;
    // if the current section is less than 0, set the current section to the last section
    if (currentSection < 0) {
        currentSection = sections.length - 1;
    } 
    // if the current section is greater than the total number of sections, set the current section to the first section
    else if (currentSection > sections.length - 1) {
        currentSection = 0;
    }
    sections[currentSection].classList.add('active');
}

// Add event listeners for next and prev buttons

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

nextButton.addEventListener('click', () => switchSection(1));
prevButton.addEventListener('click', () => switchSection(-1));
