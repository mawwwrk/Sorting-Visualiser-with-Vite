import controller from "../utils/animationControl";
import { compareBars, vizElem } from "../utils/comparer";
import { delay } from "../utils/utils";

async function bubbleSort() {
  controller.action('reset')
  let i, j;
  const barsLength = document.getElementById('vizCanvas')!.childElementCount
  for (i = 0; i < barsLength - 1; i++) {
    let sorted = true;
    for (j = 0; j < barsLength - i - 1; j++) {

      //* setting up in-loop constants
      const bars = document.getElementsByClassName('vizElem') as HTMLCollectionOf<vizElem>;
      const comparer = compareBars(bars[j], bars[j + 1])

      //* toggle highlight; compare and swap.
      comparer.toggle()
      if (comparer.isLargerThan) {
        comparer.swap();
        sorted = false;
      }

      //* delay to slow down calculation.
      await new Promise<void>(resolve => setTimeout(() => { resolve() }, delay));

      //* if pause, loop until unpaused
      while (controller.pause) { await new Promise<void>(resolve => setTimeout(() => { resolve() }, 150)) }

      //* remove highlight; end loops if stopped.
      comparer.toggle();
      if (controller.stop) { j = barsLength }
    }
    if (sorted) { break; }
    if (controller.stop) { i = barsLength }
  }
}


export default bubbleSort
