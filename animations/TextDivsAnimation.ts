import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase.min.js";

gsap.registerPlugin(CustomEase);

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
			current === index ? "100%" : current + 1 === index ? "0" : "";
	} else if (direction === "down") {
		delayNumber =
			current - 1 === index ? 0.05 : index > current ? 0.025 : 0;
		translateXNumber =
			current === index ? "-80%" : current - 1 === index ? "0" : "";
	} else
		return new Error(
			"wrong direction passed to TitleDiv Animation function"
		);

	gsap.to(element, {
		duration: 1,
		delay: delayNumber,
		transform: `translate(${translateXNumber}, 0)`,
		ease: CustomEase.create(
			"custom",
			"M0,0 C0.482,0 0.447,0.143 0.49,0.252 0.556,0.42 0.458,1 1,1 "
		),
	});
};

export default TextDivAnimation;
