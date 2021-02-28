import gsap from "gsap";

const TitleAnimation = (
	element: gsap.TweenTarget,
	dataSize: number,
	translateX: number,
	current: number,
	index: number
) => {
	gsap.to(element, {
		duration: 0.75,
		ease: "power3.in",
		transform: `matrix(1, 0, 0, 1, ${
			(current === index) || (current > index)
				? dataSize * 0.9
				: current + 1 === index
				? -72
				: translateX + dataSize
		}, 0)`,
	});
};

export default TitleAnimation;
