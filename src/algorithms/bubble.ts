import { extractValue, toggleActive } from "../utils/utils";

const bars = document.getElementsByClassName('vizElem')
function bubbleSort() {

  innerLoop()



}

function outerLoop() {
  let i;
  for (i = 0; i < bars.length; i++) {

  }
}

async function innerLoop() {
  let j;
  for (j = 0; j < bars.length - 1; j++) {
    const bar1 = bars[j] as HTMLDivElement;
    const bar2 = bars[j + 1] as HTMLDivElement;

    const toggle = () => [bar1, bar2].forEach(toggleActive)

    toggle();
    await new Promise(resolve => setTimeout(() => { resolve() }, 75));
    toggle();
  }
}

export default bubbleSort
