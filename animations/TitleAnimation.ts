import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase.min.js";

gsap.registerPlugin(CustomEase);

const TitleAnimation = (
	element: gsap.TweenTarget,
	dataSize: number,
	translateX: number,
	current: number,
	index: number
) => {
	gsap.to(element, {
		delay: current + 1 === index ? 0.05 : current > index ? 0.1 : 0,
		duration: 0.75,
		ease: CustomEase.create(
			"custom",
			"M0,0 C0.482,0 0.528,0.058 0.634,0.194 0.734,0.322 0.61,0.952 1,1 "
		),
		transform: `matrix(1, 0, 0, 1, ${
			current === index || current > index
				? dataSize * 0.9
				: current + 1 === index
				? -72
				: translateX + dataSize
		}, 0)`,
	});
};

export default TitleAnimation;
