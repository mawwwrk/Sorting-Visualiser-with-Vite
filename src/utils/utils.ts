function toggleActive(el: HTMLDivElement) {
  const bar = el.children[0];
  if (bar.classList.contains('active')) {
    bar.classList.remove('active')
  } else {
    bar.classList.add('active')
  }
}

function extractValue(el: HTMLDivElement) {
  return parseInt(el.children[1].textContent!)
}

export { toggleActive, extractValue }
