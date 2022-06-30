document.addEventListener('DOMContentLoaded', () => {
  const contextMenu = document.querySelector('.ere-context-menu');
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    let x = event.offsetX;
    let y = event.offsetY;
    console.log(x, y);
  });
});
