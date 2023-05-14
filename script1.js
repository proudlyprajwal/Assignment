
const textbox = document.getElementById('textinput');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

textbox.addEventListener('input', function() {
  if (textbox.value !== '') {
    button1.disabled = false;
    button2.disabled = false;
  } else {
    button1.disabled = true;
    button2.disabled = true;
  }
});