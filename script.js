const nightModeToggle = document.querySelector('.night-mode-toggle');
const toggleSlider = document.querySelector('.toggle-slider');

nightModeToggle.addEventListener('click', () => {
  nightModeToggle.classList.toggle('active');
  toggleSlider.classList.toggle('move');
  document.body.classList.toggle('night-mode');
  localStorage.setItem('nightMode', document.body.classList.contains('night-mode'));
});

// Initialize Night Mode

if (localStorage.getItem('nightMode') === 'true') {
  nightModeToggle.classList.add('active');
  toggleSlider.classList.add('move');
  document.body.classList.add('night-mode');
}

