import gsap from "gsap";

const createTimeline = () => gsap.timeline();

const animateBodyOverflow = (overflow, duration) => {
  return gsap.to("body", {
    duration,
    overflowY: overflow,
    ease: "power3.inOut",
  });
};

const showTextContainer = (tl) => {
  tl.to(".texts-container", { duration: 0, opacity: 1, ease: "power3.out" });
};

const animateTextIn = (tl) => {
  tl.from(".texts-container span", {
    duration: 0.3,
    opacity: 1,
    stagger: 0.1,
    ease: "back.out(1.5)",
  });
};

const animateTextOut = (tl) => {
  tl.to(".texts-container span", {
    duration: 0.2,
    delay: 1,
    opacity: 0,
    stagger: 0.1,
    ease: "power1.in",
  });
};

const hidePreloader = (tl, setLoading, setIsAnimationComplete) => {
  tl.to(".preloader", {
    duration: 1,
    opacity: 0,
    scale: 1.1,
    ease: "power2.out",
    onComplete: () => {
      setLoading(false);
      setIsAnimationComplete(true);
    },
  });
};

export const preLoaderAnim = (setLoading) => {
  const tl = createTimeline();
  let isAnimationComplete = false;

  const setIsAnimationComplete = (value) => {
    isAnimationComplete = value;
  };

  const startAnimation = () => {
    tl.add(animateBodyOverflow("hidden", 0.1));
    showTextContainer(tl);
    animateTextIn(tl);
    animateTextOut(tl);
    tl.add(animateBodyOverflow("scroll", 0.1));
    hidePreloader(tl, setLoading, setIsAnimationComplete);
  };

  startAnimation();

  const preloaderElement = document.querySelector(".preloader");
  const handleClick = () => {
    if (!isAnimationComplete) {
      tl.kill();
      gsap.to(".preloader", {
        duration: 0.5,
        opacity: 0,
        scale: 1.1,
        ease: "power2.out",
        onComplete: () => {
          setLoading(false);
        },
      });
      animateBodyOverflow("scroll", 0.1);
    }
  };

  preloaderElement.addEventListener("click", handleClick);

  return () => {
    preloaderElement.removeEventListener("click", handleClick);
  };
};
