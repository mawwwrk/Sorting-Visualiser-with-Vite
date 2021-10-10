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

function swap(el1: HTMLElement, el2: HTMLElement) {

  el2.remove();
  document.getElementById('vizCanvas')!.insertBefore(el2, el1);

}
//#region //? this is all delay
const speedSlider = document.getElementById('speedSlider')! as HTMLInputElement;

let delay = 75

function updateDelay(val: string) {
  return delay = -1.99 * parseInt(val) + 200
}

speedSlider.addEventListener('input', function (_ev) { updateDelay(this.value) })
//#endregion

export { toggleActive, extractValue, swap, delay }
