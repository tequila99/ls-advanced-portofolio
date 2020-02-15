const mainMenu = (() => {
    const smoothScroll = function(reqmove,duration) {
      const requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame
      window.requestAnimationFrame = requestAnimationFrame
      const scrollHeight = window.scrollY
      const diffY = scrollHeight < reqmove ? reqmove - scrollHeight : reqmove;
      const animate = (draw, duration) => {
        const start = performance.now()
        requestAnimationFrame(function move(time) {
          let timePassed = time - start
          if (timePassed > duration) timePassed = duration
          draw(timePassed)
          if (timePassed < duration) requestAnimationFrame(move)
        })
      }
     animate(timePassed => {
       window.scroll(0, scrollHeight + diffY*(timePassed/duration))
     }, duration) 
    } 
    const menuLinks = document.querySelectorAll('.top-menu')
    const mobileLink = document.querySelector('.mobile-nav')
    const btns = document.querySelectorAll('.js-menu-btn');

    const handleClick = e => {
      const target = e.target;
      if (target.classList.contains('top-menu__link') || target.classList.contains('mobile-nav__nav-link')) {
        const targetSection = document.querySelector(`#${target.dataset.anchor}`)
        const targetSectionPos = targetSection.getBoundingClientRect().y;
        smoothScroll(targetSectionPos,600);       
      }
    }

    menuLinks.forEach(item => {
      item.addEventListener('click', handleClick)
    })

    mobileLink.addEventListener('click', e => {
      handleClick(e);
      mobileLink.classList.toggle('is-active')
      btns.forEach(item => {
        item.classList.toggle('is-active');
      })
    })

  }
)();

export default mainMenu;