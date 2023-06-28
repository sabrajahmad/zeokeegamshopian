// script.js

// Function to toggle the visibility of the navigation menu on small screens
function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
  }
  
  // Add event listener to the menu icon for toggling the menu visibility
  var menuIcon = document.querySelector('.menu-icon');
  menuIcon.addEventListener('click', toggleMenu);
  