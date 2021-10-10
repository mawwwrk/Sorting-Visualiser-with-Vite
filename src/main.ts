import { bubbleSort } from './algorithms/bubble';
import generateBarArray from './components/bars';
import { handleNewArrayBtn, pauseAction, stopAction } from './utils/buttonFunctions';

const app = document.querySelector<HTMLDivElement>('#app')!

/* app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
` */

const main = document.querySelector<HTMLElement>('#main')!

document.getElementById('NewArray')!.addEventListener('click', handleNewArrayBtn)
document.getElementById('Bubble')!.addEventListener('click', bubbleSort)
document.getElementById('Stop')!.addEventListener('click', stopAction)
document.getElementById('Pause')!.addEventListener('click', pauseAction)

const vizCanvas = generateBarArray();
main.append(vizCanvas)
