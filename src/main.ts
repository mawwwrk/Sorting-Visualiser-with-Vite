import bubbleSort from './algorithms/bubble';
import insertionSort from './algorithms/insertion';
import generateBarArray from './components/bars';
import controller from './utils/animationControl';
import { handleNewArrayBtn } from './utils/buttonFunctions';

// const app = document.querySelector<HTMLDivElement>('#app')!

/* app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
` */

const main = document.querySelector<HTMLElement>('#main')!

document.getElementById('NewArray')!.addEventListener('click', handleNewArrayBtn);
document.getElementById('Bubble')!.addEventListener('click', bubbleSort);
document.getElementById('Insertion')!.addEventListener('click', insertionSort)
document.getElementById('Stop')!.addEventListener('click', (_ev) => controller.action('stop'))
document.getElementById('Pause')!.addEventListener('click', (_ev) => controller.action('pause'))

const vizCanvas = generateBarArray();
main.append(vizCanvas)
