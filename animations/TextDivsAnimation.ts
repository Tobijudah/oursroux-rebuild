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
	let delayNumber: number;
	let translateXNumber: string;
	if (direction === "up") {
		delayNumber =
			current + 1 === index ? 0.065 : current > index ? 0.15 : 0;
		translateXNumber =
			current === index || current > index
				? "100%"
				: current + 1 === index
				? "0%"
				: "-80%";
	} else if (direction === "down") {
		delayNumber =
			current - 1 === index ? 0.05 : index > current ? 0.025 : 0;
		translateXNumber =
			current === index || index > current
				? "-80%"
				: current - 1 === index
				? "0%"
				: "100%";
	} else
		console.error("wrong direction passed to TextDiv Animation function");

	gsap.to(element, {
		duration: 1.1,
		delay: delayNumber,
		x: translateXNumber,
		ease: CustomEase.create(
			"custom",
			"M0,0 C0.482,0 0.447,0.143 0.49,0.252 0.556,0.42 0.458,1 1,1 "
		),
	});
};

export default TextDivAnimation;
