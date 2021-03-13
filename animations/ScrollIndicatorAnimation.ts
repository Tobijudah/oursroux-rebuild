import gsap from "gsap";

const ScrollIndicatorAnimation = (
	text: gsap.TweenTarget,
	underline: gsap.TweenTarget
) => {
	const tl = gsap.timeline({ delay: 0.25 });
	tl.to(underline, {
    duration: 0.5,
    xPercent: -100,
  })
  .to(text, {
		duration: 0.55,
		yPercent: 100,
	})
  .eventCallback("onComplete", () => tl.kill());
};

export default ScrollIndicatorAnimation;
