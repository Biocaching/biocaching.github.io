var menuStatus = false;

function menuToggle() {
  var mobileMenu = document.getElementById('menu');

  if (menuStatus) {
    mobileMenu.style.display = 'none';
    menuStatus = false;
  } else {
    mobileMenu.style.display = 'inline';
    menuStatus = true;
  }
}