import generateBarArray from "../components/bars";

function handleNewArrayBtn() {
  if (document.getElementById('vizCanvas')) {
    document.getElementById('vizCanvas')!.remove();
  }
  const newVizCanvas = generateBarArray()
  document.querySelector('main')!.append(newVizCanvas)

}

export { handleNewArrayBtn }

