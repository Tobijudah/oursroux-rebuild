import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase.min.js";

gsap.registerPlugin(CustomEase);
gsap.config({
	force3D: true,
});

const TitleAnimation = (
	direction: "up" | "down",
	element: gsap.TweenTarget,
	dataSize: number,
	translateX: number,
	current: number,
	index: number,
	setState: (value: React.SetStateAction<number>) => void
) => {
	let delayNumber: number;
	let translateXNumber: number;
	if (direction === "up") {
		delayNumber = current === index ? 0.065 : 0;
		translateXNumber =
			current - 1 === index
				? translateX + dataSize * 0.95
				: current > index
				? translateX
				: current === index
				? -(dataSize * 0.05)
				: translateX + dataSize * 0.95;
		setTimeout(() => {
			setState(translateXNumber);
		}, 1000);
	} else if (direction === "down") {
		delayNumber =
			current === index ? 0.05 : index > current + 1 ? 0.025 : 0;
		translateXNumber =
			current + 1 === index
				? translateX - dataSize * 0.9
				: index > current
				? translateX - dataSize * 0.95
				: current === index
				? -(dataSize * 0.05)
				: translateX;
		setTimeout(() => {
			setState(translateXNumber);
		}, 1000);
	} else console.error("wrong direction passed to Title Animation function");

	gsap.to(element, {
		duration: 1,
		delay: delayNumber,
		transform: `matrix(1, 0, 0, 1, ${translateXNumber}, 0)`,
		ease: CustomEase.create(
			"custom",
			"M0,0 C0.482,0 0.447,0.143 0.49,0.252 0.556,0.42 0.458,1 1,1 "
		),
	});
};

// ALTERNATE EASES
// "M0,0 C0.482,0 0.528,0.058 0.634,0.194 0.734,0.322 0.61,0.952 1,1 "
// "M0,0,C0.482,0,0.414,0.349,0.438,0.52,0.462,0.692,0.468,1,1,1"

export default TitleAnimation;
