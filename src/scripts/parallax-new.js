let paral = (function() {
  document.addEventListener("scroll", parallax);
  const speeds = [0,-0.01,-0.01,0.03,0.015,0.1,0]
  const speedsAdd = [-0.03,-0.03,-0.03,0.02,0.,0]
  const elem = document.querySelector(".bg-wrapper");
  const budda = document.querySelector('.bg-budda')
  const buddaParent =  budda.parentNode;
  const buddaOffset = budda.offsetTop + buddaParent.offsetTop;

  let bgP = window.getComputedStyle(elem).backgroundPositionY.split(',').map(el => el.trim());
  let buddaBgP = window.getComputedStyle(budda).backgroundPositionY.split(',').map(el => el.trim());


  function parallax(e) {
      let _h = window.innerHeight;
      let scroll = window.pageYOffset;
      let _w = window.innerWidth;
      if (scroll < _h && _w > 768) {      
        let newBgP = bgP.map((el,index) => {
          if (el.includes('%')) {
            return `${el.slice(0,-1) - scroll * speeds[index] }%`
          } else if (el.includes('px')) {
            let offset = 0 + el.slice(0,-2)
            return `${offset - 10*speeds[index]*scroll*offset/_h}px`
          } else {
            return el
          }
        }).join(', ')
        elem.style.backgroundPositionY = newBgP;
      }
      if (buddaOffset + 600 <= scroll && _w > 768) {
        // console.log('будда')
        let newBgP = buddaBgP.map((el,index) => {
          if (el.includes('%')) {
            return `${el.slice(0,-1) - (scroll-buddaOffset+500) * speedsAdd[index] }%`
          } else if (el.includes('px')) {
            let offset = 0 + el.slice(0,-2)
            return `${offset - 10*speedsAdd[index]*(scroll-buddaOffset+500)*offset/_h}px`
          } else {
            return el
          }
        }).join(', ')
        budda.style.backgroundPositionY = newBgP;
      }
  }


})();

export default paral;