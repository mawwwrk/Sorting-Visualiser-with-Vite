import controller from "../utils/animationControl";
import { compareBars, vizElem } from "../utils/comparer";
import { delay } from "../utils/utils";

async function insertionSort() {
  controller.action('reset')
  let i: number, j;
  const barsLength = document.getElementById('vizCanvas')!.childElementCount
  for (i = 1; i < barsLength; i++) {
    const bars = document.getElementsByClassName('vizElem') as HTMLCollectionOf<vizElem>;
    const compareStep = (x: vizElem) => compareBars(x, bars[i])
    // const bar2Key = extractValue(bar2);
    j = i - 1;
    // let bar1 = bars[j] as HTMLDivElement;
    // let bar1Key = extractValue(bar1);
    let comparer = compareBars(bars[j], bars[i])


    while (j >= 0 && comparer.isLargerThan) {
      comparer.toggle();
      comparer.swap();
      await new Promise<void>(resolve => setTimeout(() => { resolve() }, delay));

      while (controller.pause) { await new Promise<void>(resolve => setTimeout(() => { resolve() }, 150)) }

      comparer.toggle();
      j = j - 1;
      if (j >= 0) {
        comparer = compareBars(bars[j], bars[j + 1])
      }
      if (controller.stop) { j = -1 }
    }
    if (controller.stop) { i = barsLength }
    await new Promise<void>(resolve => setTimeout(() => { resolve() }, delay));

  }
}

export default insertionSort
