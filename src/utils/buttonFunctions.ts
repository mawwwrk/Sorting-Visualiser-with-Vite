import generateBarArray from "../components/bars";

function handleNewArrayBtn() {
  if (document.getElementById('vizCanvas')) {
    document.getElementById('vizCanvas')!.remove();
  }
  const newVizCanvas = generateBarArray()
  document.querySelector('main')!.append(newVizCanvas)

}

let stop = false;
let pause = false;

function toggleAnimation(i: number) {
  switch (i) {
    case 1:
      stop = true;
      break;
    case 2:
      pause = !pause;
      break;
    case 3:
      stop = false;
      pause = false;
    default:
      break;
  }
}

export { handleNewArrayBtn, stop, pause, toggleAnimation }

