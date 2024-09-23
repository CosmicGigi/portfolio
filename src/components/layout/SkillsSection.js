import React, { useEffect, useRef, useMemo } from "react";

const SkillsSection = () => {
  const trackRef = useRef(null);

  const skills = useMemo(
    () => [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "SASS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Jest",
      "SEO",
      "Git",
      "Figma",
    ],
    []
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const setupInfiniteScroll = () => {
      const skillsList = track.querySelector(".skills-list");
      const skillsItems = Array.from(skillsList.children);
      const totalWidth = skillsItems.reduce(
        (sum, item) => sum + item.offsetWidth,
        0
      );

      skillsItems.forEach((item) => {
        const clone = item.cloneNode(true);
        skillsList.appendChild(clone);
      });

      const speed = 50;
      const duration = totalWidth / speed;
      track.style.setProperty("--scroll-duration", `${duration}s`);
    };

    setupInfiniteScroll();
    window.addEventListener("resize", setupInfiniteScroll);

    return () => window.removeEventListener("resize", setupInfiniteScroll);
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-track" ref={trackRef}>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
