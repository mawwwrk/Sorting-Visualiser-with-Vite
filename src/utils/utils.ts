function toggleActive(el: HTMLDivElement) {
  const bar = el.children[0];
  if (bar.classList.contains('active')) {
    bar.classList.remove('active')
  } else {
    bar.classList.add('active')
  }
}

function extractValue(el: HTMLDivElement) {
  return parseInt(el.children[1].textContent!)
}

const speedSlider = document.getElementById('speedSlider')! as HTMLInputElement;

let delay = 75

function updateDelay(val: string) {
  return delay = -1.85 * parseInt(val) + 200
}

speedSlider.addEventListener('input', function (_ev) { updateDelay(this.value) })

export { toggleActive, extractValue, delay }
