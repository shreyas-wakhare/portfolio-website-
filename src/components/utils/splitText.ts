import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  
  const paras = document.querySelectorAll(".para");
  const titles = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";

  paras.forEach((para) => {
    para.classList.add("visible");
    gsap.from(para, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: para,
        start: TriggerStart,
        toggleActions: "play none none none",
      },
    });
  });

  titles.forEach((title) => {
    title.classList.add("visible");
    gsap.from(title, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: title,
        start: TriggerStart,
        toggleActions: "play none none none",
      },
    });
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
