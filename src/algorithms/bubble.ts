import { extractValue, toggleActive } from "../utils/utils";

let stop = false;
let pause = false;
let delay = 10;

async function bubbleSort() {
  let i, j;
  const barsLength = document.getElementById('vizCanvas')!.childElementCount
  for (i = 0; i < barsLength - 1; i++) {
    let sorted = true;
    for (j = 0; j < barsLength - i - 1; j++) {

      //* setting up in-loop constants
      const bars = document.getElementsByClassName('vizElem');
      const bar1 = bars[j] as HTMLDivElement;
      const bar2 = bars[j + 1] as HTMLDivElement;
      const toggle = () => [bar1, bar2].forEach(toggleActive);


      //* toggle highlight; compare and swap.
      toggle();
      if (extractValue(bar1) > extractValue(bar2)) {
        bar2.remove();
        document.getElementById('vizCanvas')!.insertBefore(bar2, bar1);
        sorted = false;
      }
      //* delay to slow down calculation.
      await new Promise<void>(resolve => setTimeout(() => { resolve() }, delay));

      //* if pause, loop until unpaused
      while (pause) {
        await new Promise<void>(resolve => setTimeout(() => { resolve() }, 100));
      }
      //* remove highlight; end loops if stopped.
      toggle();
      if (stop) { j = barsLength }
    }
    if (sorted) { stop = true }
    if (stop) { i = barsLength; stop = !stop }
  }
}

function stopBubble() {
  stop = true
}

function pauseBubble() {
  pause = !pause
}


export { bubbleSort, stopBubble, pauseBubble }
