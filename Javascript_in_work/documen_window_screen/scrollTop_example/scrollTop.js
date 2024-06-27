const scroller = document.querySelector('#scroller');
const output = document.querySelector('#output');

scroller.addEventListener('scroll', () => {
  output.textContent = `scrollTop: ${scroller.scrollTop}`;
});
