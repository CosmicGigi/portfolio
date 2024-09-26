import gsap from "gsap";

const createTimeline = () => gsap.timeline();

const toggleBodyOverflow = (overflow) => {
  gsap.to("body", { overflowY: overflow, ease: "power3.inOut" });
};

const animateText = (tl) => {
  tl.to(".texts-container", { opacity: 1, ease: "power3.out" })
    .from(".texts-container span", {
      stagger: 0.1,
      ease: "back.out(1.5)",
    })
    .to(".texts-container span", {
      opacity: 0,
      delay: 1,
      stagger: 0.1,
      ease: "power1.in",
    });
};

const hidePreloader = (tl, setLoading) => {
  tl.to(".preloader", {
    opacity: 0,
    scale: 1.1,
    ease: "power2.out",
    onComplete: () => setLoading(false),
  });
};

export const preLoaderAnim = (setLoading) => {
  const tl = createTimeline();

  toggleBodyOverflow("hidden");
  animateText(tl);
  hidePreloader(tl, setLoading);
  toggleBodyOverflow("scroll");

  const preloaderElement = document.querySelector(".preloader");
  const handleClick = () => {
    tl.kill();
    hidePreloader(gsap.timeline(), setLoading);
    toggleBodyOverflow("scroll");
  };

  preloaderElement.addEventListener("click", handleClick);

  return () => {
    preloaderElement.removeEventListener("click", handleClick);
  };
};
