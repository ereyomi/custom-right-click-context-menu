// @ts-nocheck
document.addEventListener('DOMContentLoaded', () => {
  const contextMenu = document.querySelector('.ere-context-menu');
  const subMenus = document.querySelectorAll('.subMenus');
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    let x = event.offsetX;
    let y = event.offsetY;
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let cmWidth = contextMenu.offsetWidth;
    let cmHeight = contextMenu.offsetHeight;
    subMenus.forEach((subMenu) => {
      if (x > winWidth - cmWidth - subMenu.offsetWidth) {
        subMenu.style.left = '-100px';
      } else {
        subMenu.style.left = '';
        subMenu.style.right = '-100px';
      }
    });
    x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = 'visible';
  });
  document.addEventListener('click', () => {
    contextMenu.style.visibility = 'hidden';
  });
});
