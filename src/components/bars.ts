// import './component.style.scss'

const defaultBars = 50

function generateValueArray(quantity = defaultBars) {

  const barArray: number[] = [];

  function randomNumberGenerator() {
    return Math.floor(Math.random() * 91) + 10;
  }

  while (barArray.length < quantity) {
    const randomNumber = randomNumberGenerator();
    if (!barArray.includes(randomNumber)) {
      barArray.push(randomNumber)
    }
  }
  return barArray;
}


function makeBar(value: number): HTMLDivElement {
  const bar = document.createElement('div');
  bar.classList.add('bar');
  bar.style.height = `${value * 3}px`

  const p = document.createElement('p')
  p.textContent = `${value}`

  const wrapper = document.createElement('div');
  wrapper.classList.add('vizElem');

  wrapper.append(bar, p)

  return wrapper

}

function generateBarArray(bars = defaultBars) {

  const vizCanvas = document.createElement('div')
  vizCanvas.id = 'vizCanvas'

  const values = generateValueArray(bars);

  values.forEach((v) => {
    const bar = makeBar(v);
    vizCanvas.appendChild(bar)
  })

  return vizCanvas

}

export default generateBarArray
