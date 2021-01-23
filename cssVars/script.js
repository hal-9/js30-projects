const allInputs = document.querySelectorAll('.controls input');

function checkUpdate() {
  console.log(this.value);
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

allInputs.forEach(input => input.addEventListener('change', checkUpdate));
allInputs.forEach(input => input.addEventListener('mousemove', checkUpdate));
