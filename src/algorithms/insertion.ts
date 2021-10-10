import { stop, pause, toggleAnimation } from "../utils/buttonFunctions";
import { delay, extractValue, swap, toggleActive } from "../utils/utils";

async function insertionSort() {
  toggleAnimation(3)
  let i, j;
  const barsLength = document.getElementById('vizCanvas')!.childElementCount
  for (i = 1; i < barsLength; i++) {
    const bars = document.getElementsByClassName('vizElem');
    let bar2 = bars[i] as HTMLDivElement;
    const bar2Key = extractValue(bar2);
    j = i - 1;
    let bar1 = bars[j] as HTMLDivElement;
    let bar1Key = extractValue(bar1);

    const toggle = () => [bar1, bar2].forEach(toggleActive);
    while (j >= 0 && bar1Key > bar2Key) {
      toggle()
      swap(bar1, bar2)
      await new Promise<void>(resolve => setTimeout(() => { resolve() }, delay));

      while (pause) { await new Promise<void>(resolve => setTimeout(() => { resolve() }, 150)) }

      toggle()
      j = j - 1;
      if (j >= 0) {
        bar1 = bars[j] as HTMLDivElement;
        bar1Key = extractValue(bar1);
        bar2 = bars[j + 1] as HTMLDivElement;
      }
      if (stop) { j = -1 }
    }
    if (stop) { i = barsLength }
    await new Promise<void>(resolve => setTimeout(() => { resolve() }, delay));

  }
}

export default insertionSort
