import { pauseBubble, stopBubble } from "../algorithms/bubble";
import generateBarArray from "../components/bars";

function handleNewArrayBtn() {
  if (document.getElementById('vizCanvas')) {
    document.getElementById('vizCanvas')!.remove();
  }
  const newVizCanvas = generateBarArray()
  document.querySelector('main')!.append(newVizCanvas)

}

function stopAction() {
  stopBubble()
}

function pauseAction() {
  pauseBubble()
}

export { handleNewArrayBtn, stopAction, pauseAction }

