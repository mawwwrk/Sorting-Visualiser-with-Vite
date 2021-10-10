import generateBarArray from './components/bars';
import { handleNewArrayBtn } from './utils/buttonFunctions';

const app = document.querySelector<HTMLDivElement>('#app')!

/* app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
` */

const main = document.querySelector<HTMLElement>('#main')!

document.getElementById('NewArray')!.addEventListener('click', handleNewArrayBtn)

const vizCanvas = generateBarArray();
main.append(vizCanvas)
