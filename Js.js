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
