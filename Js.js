// Select all the sections 
const sections = document.querySelectorAll('.section');

// Add click event listener to all the sections
sections.forEach(section => {
    section.addEventListener('click', e => {
        // Remove the active class from all sections
        sections.forEach(section => section.classList.remove('active'));
        // Add the active class to the clicked section
        e.target.classList.add('active');
    });
});
