
interface wrapper extends HTMLDivElement { }
type children = {
  children: [HTMLDivElement, HTMLParagraphElement]
}
type vizElem = children & wrapper


function compareBars(arg1: vizElem, arg2: vizElem) {
  function parseValue(el: vizElem) {
    return parseInt(el.children[1].textContent!)
  };
  const value1 = parseValue(arg1);
  const value2 = parseValue(arg2);
  const isLargerThan = value1 > value2;
  const comparer = {
    values: [value1, value2],
    isLargerThan: isLargerThan,
    toggle: () => {
      [arg1, arg2].forEach((el) => {
        const bar: HTMLDivElement = el.children[0];
        if (bar.classList.contains('active')) {
          bar.classList.remove('active')
        } else {
          bar.classList.add('active')
        }
      })
    },
    swap: () => {
      arg2.remove();
      document.getElementById('vizCanvas')!.insertBefore(arg2, arg1);
    },
  }
  return comparer
}

export { compareBars, vizElem }
