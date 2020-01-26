import "./styles/main.pcss";

import parallax from "./scripts/parallax";
import menuScript from "./scripts/toggleNavPopup";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}


import "./scripts/skills";
import "./scripts/feedback-slider";
import "./scripts/preview";

const mainParallaxItems = Array.from(document.querySelectorAll(".parralax-scene--main .js-parallax-item"));
const buddaParallaxItems = Array.from(document.querySelectorAll(".parralax-scene--budda .js-parallax-item"));
const buddaOffset = document.querySelector('#budda-section').offsetTop

window.addEventListener('load', () => {
  menuScript.init();
});


window.addEventListener("wheel", () => {
	let scroll = window.pageYOffset;

  // main parallax
	if (scroll < window.innerHeight) {
		mainParallaxItems.forEach(block => {
			let accel = block.dataset.speed;

			parallax.strafe(block, scroll, accel);
		});
  }

  if (buddaOffset <= scroll) {
    buddaParallaxItems.forEach(block => {
      let accel = block.dataset.speed,
      buddaScroll = scroll - buddaOffset;
      parallax.strafe(block, buddaScroll, accel)
    })
  }

});
