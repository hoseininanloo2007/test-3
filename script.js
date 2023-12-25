document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.getElementById('login-form');
  fadeIn(loginForm);
});

function fadeIn(element) {
  element.style.opacity = 1;
}

function login() {
  // اضافه کردن افکت‌های مربوط به لاگین
  shakeElement('login-form');
  rotateElement('login-form');
  pulseElement('login-form');
  slideInElement('login-form');
}

// افکت‌های جدید
function shakeElement(elementId) {
  var element = document.getElementById(elementId);
  element.classList.add(shake);
  setTimeout(function() {
      element.classList.remove(shake);
  }, 1000);
}

function rotateElement(elementId) {
  var element = document.getElementById(elementId);
  element.classList.toggle(rotate);
}

function pulseElement(elementId) {
  var element = document.getElementById(elementId);
  element.classList.toggle(pulse);
}

function slideInElement(elementId) {
  var element = document.getElementById(elementId);
  element.classList.toggle(slide);
}

function changeBackgroundColor() {
  var body = document.body;
  var randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
}

function fadeInOut(elementId) {
  var element = document.getElementById(elementId);
  element.style.transition = 'opacity 0.5s ease-in-out';
  element.style.opacity = (element.style.opacity === '1') ? '0' : '1';
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}