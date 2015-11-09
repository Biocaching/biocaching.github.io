var elements = [
  document.getElementById('b-image-header'),
  document.getElementById('b-img'),
  document.getElementById('back-img-two')
  ];

var windowHeight = window.innerHeight;

for (var i = 0; i < elements.length; i++) {
  console.log(elements[i])
  elements[i].style.height = windowHeight / 100 * 70 + 'px';
}
