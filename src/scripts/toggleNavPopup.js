export default (() => {
  const 
      btns = document.querySelectorAll('.js-menu-btn'),
      menu = document.querySelector('.mobile-nav');
  return {
      init: () => {
          btns.forEach(btn => {
              btn.addEventListener('click', function() {
                  this.classList.toggle('is-active');
                  menu.classList.toggle('is-active');
              })
          })
      }
  }
})();