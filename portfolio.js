function showContent(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Initialize with Option 1 content shown
showContent('section1');
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const content = document.getElementById('content');

hamburger.addEventListener('click', () => {
sidebar.classList.toggle('show');
hamburger.classList.toggle('open');
});

// Optional: close sidebar when clicking outside on small screens
content.addEventListener('click', () => {
if (window.innerWidth <= 768 && sidebar.classList.contains('show')) {
sidebar.classList.remove('show');
hamburger.classList.remove('open');
}
});

function showContent(sectionId) {
// Hide all sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => section.classList.remove('active'));
// Show the selected section
const selected = document.getElementById(sectionId);
if (selected) {
selected.classList.add('active');
// On small screens, close sidebar after selecting
if (window.innerWidth <= 768) {
sidebar.classList.remove('show');
hamburger.classList.remove('open');
}
// Focus on the content for accessibility
selected.focus();
}
}