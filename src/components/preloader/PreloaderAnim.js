import gsap from "gsap";

const createTimeline = () => gsap.timeline();

const animateBodyOverflow = (overflow, duration) => {
  return gsap.to("body", {
    duration,
    overflowY: overflow,
    ease: "power3.inOut",
  });
};

export const preLoaderAnim = (setLoading) => {
  const tl = createTimeline();
  let isAnimationComplete = false;

  const startAnimation = () => {
    tl.add(animateBodyOverflow("hidden", 0.1))
      .to(".texts-container", { duration: 0, opacity: 1, ease: "power3.out" })
      .from(".texts-container span", {
        duration: 2,
        delay: 1,
        opacity: 1,
        stagger: 0.4,
        ease: "power3.out",
      })
      .add(animateBodyOverflow("scroll", 0.1))
      .to(".preloader", {
        duration: 1,
        y: "-100%",
        scale: 1.05,
        filter: "blur(10px)",
        ease: "power2.out",
        onComplete: () => {
          isAnimationComplete = true;
          setLoading(false);
        },
      });
  };

  startAnimation();

  document.querySelector(".preloader").addEventListener("click", () => {
    if (!isAnimationComplete) {
      tl.kill();
      gsap.to(".preloader", {
        duration: 0.5,
        y: "-100%",
        ease: "power2.out",
        onComplete: () => {
          setLoading(false);
        },
      });
      animateBodyOverflow("scroll", 0.1);
    }
  });
};
