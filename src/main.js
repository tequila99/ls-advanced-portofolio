import "./styles/main.pcss";

import parallax from "./scripts/parallax.js";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";

let mainParallaxItems = Array.prototype.slice.call(document.querySelectorAll(".parralax-scene--main .js-parallax-item"));

window.addEventListener("wheel", () => {
	let scroll = window.pageYOffset;

  // main parallax
	if (scroll < window.innerHeight) {
		mainParallaxItems.forEach(block => {
			let accel = block.dataset.speed;

			parallax.strafe(block, scroll, accel);
		});
  }
});
