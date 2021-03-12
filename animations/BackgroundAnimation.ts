import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase.min.js";

gsap.registerPlugin(CustomEase);
gsap.config({
	force3D: true,
});

const BackgroundAnimation = (
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
		delayNumber = current === index || current - 1 === index ? 0.035 : 0;
		translateXNumber =
			current === 13 && index === 13
				? 0
				: current === index
				? dataSize / 10
				: current === index || current > index
				? dataSize
				: translateX + 0.6 * dataSize;
		setTimeout(() => {
			setState(translateXNumber);
		}, 1000);
	} else if (direction === "down") {
		delayNumber = current === index || current - 1 === index ? 0.035 : 0;
		translateXNumber =
			current === 12 && index === 13
				? translateX - 0.6 * dataSize
				: current === index
				? dataSize / 10
				: current + 1 === index
				? translateX - 0.7 * dataSize
				: index > current
				? translateX - 0.6 * dataSize
				: dataSize;
		setTimeout(() => {
			setState(translateXNumber);
		}, 1000);
	} else console.error("wrong direction passed to Title Animation function");

	gsap.to(element, {
		duration: 1.2,
		delay: delayNumber,
		transform: `matrix(1, 0, 0, 1, ${translateXNumber}, 0)`,
		ease: CustomEase.create(
			"custom",
			"M0,0 C0.482,0 0.447,0.143 0.49,0.252 0.556,0.42 0.458,1 1,1 "
		),
	});
};

export default BackgroundAnimation;
