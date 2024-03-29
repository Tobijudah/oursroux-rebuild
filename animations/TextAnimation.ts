import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase.min.js";

gsap.registerPlugin(CustomEase);
gsap.config({
	force3D: true,
});

const TextDivAnimation = (
	direction: "up" | "down",
	element: gsap.TweenTarget,
	current: number,
	index: number
) => {
	let visibility: string;
	let delayNumber: number;
	let opacityNumber: number;
	let translateXNumber: string;
	if (direction === "up") {
		opacityNumber = current + 1 === index ? 1 : 0;
		visibility = current + 1 === index ? "visible" : "hidden";
		delayNumber = current + 1 === index ? -0.065 : 0;
		translateXNumber =
			current === index || current > index
				? "10%"
				: current + 1 === index
				? "0%"
				: "-10%";
	} else if (direction === "down") {
		opacityNumber = current - 1 === index ? 1 : 0;
		visibility = current - 1 === index ? "visible" : "hidden";
		delayNumber = current - 1 === index ? 0.065 : 0;
		translateXNumber =
			current === index || index > current
				? "-10%"
				: current - 1 === index
				? "0%"
				: "10%";
	} else
	console.error("wrong direction passed to Text Animation function");

	setTimeout(() => {
		gsap.set(element, { visibility });
	}, 550);
	gsap.to(element, {
		duration: 1,
		delay: delayNumber,
		opacity: opacityNumber,
		x: translateXNumber,
		ease: CustomEase.create(
			"custom",
			"M0,0 C0.482,0 0.447,0.143 0.49,0.252 0.556,0.42 0.458,1 1,1 "
		),
	});
};

export default TextDivAnimation;
