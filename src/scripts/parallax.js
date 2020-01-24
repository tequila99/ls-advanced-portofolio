let parallax = (function () {
	let strafe = (block, scroll, accel) => {
		let 
			strafe = `${scroll / accel}%`,
			translateString = `translate(0, -${strafe}) translateZ(0)`,
			style = block.style;
		
		style.transform = translateString;
	}

	return {
		strafe: strafe 
	}
})();

export default parallax;