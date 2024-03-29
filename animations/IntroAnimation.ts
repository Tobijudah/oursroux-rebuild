import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase.min.js";

gsap.registerPlugin(CustomEase);
gsap.config({
	force3D: true,
});

const IntroAnimation = (
	underline: gsap.TweenTarget,
	scrollText: gsap.TweenTarget,
	circle: gsap.TweenTarget,
	texts: gsap.TweenTarget,
	titles: gsap.TweenTarget,
	textDivs: gsap.TweenTarget,
	backgrounds: gsap.TweenTarget,
) => {

	gsap.set(texts, {opacity: 0})
	gsap.set(circle, {right: '-5%'})
	gsap.set(scrollText, {yPercent: 100})
	gsap.set(underline, {xPercent: -100})
	gsap.set(backgrounds, {xPercent: '-110'})
	gsap.set(titles, {xPercent: '-100', opacity: 0})
	gsap.set(textDivs, {xPercent: '-100', "clip-path": `inset(0px 0px 0px 0px)`})
	

	const intro = gsap.timeline({ delay: 4 });
	intro.to(backgrounds, {
		duration: 1.2,
		xPercent: 0,
		ease: CustomEase.create(
			"custom",
			"M0,0 C0.482,0 0.447,0.143 0.49,0.252 0.556,0.42 0.458,1 1,1 "
		),
	})
	.to(titles, {
		duration: 1,
		xPercent: 0,
		opacity: 1,
		ease: CustomEase.create(
			"custom",
			"M0,0 C0.482,0 0.447,0.143 0.49,0.252 0.556,0.42 0.458,1 1,1 "
		),
	}, '-=1')
	.to(textDivs, {
		duration: 1.1,
		xPercent: 0,
		ease: CustomEase.create(
			"custom",
			"M0,0 C0.482,0 0.447,0.143 0.49,0.252 0.556,0.42 0.458,1 1,1 "
		),
	}, '-=1.1')
	.to(textDivs, {
		duration: 0.5,
		"clip-path": `inset(0px 0px 0px ${window.innerWidth / 10}px)`,
	}, '-=0.5')
	.to(circle, {
		duration: 0.5,
		right: '5%'
	}, "-=0.5")
	.to(texts, {
		duration: 0.5,
		opacity: 1,
	}, '-=0.25')
	.to(scrollText, {
		duration: 0.5,
		yPercent: 0,
	}, '-=0.25')
	.to(underline, {
		duration: 0.5,
		xPercent: 0,
	})
	.eventCallback('onStart', () => gsap.set('button', {opacity: 1}))
	.eventCallback('onComplete', () => intro.kill())
};

export default IntroAnimation;
