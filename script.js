
const dropdown = document.getElementById('gradient-dropdown');
const body = document.body;

dropdown.addEventListener('change', function() {
  const selectedGradient = this.value;
  body.style.backgroundImage = selectedGradient;
});
