import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let smoother: any = null;

const Navbar = () => {
  useEffect(() => {
    // CSS smooth scroll instead of ScrollSmoother
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo(0, 0);
    
    smoother = {
      paused: () => {},
      scrollTo: (target: string) => {
        const element = document.querySelector(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          const target = document.querySelector(section!);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Logo
        </a>
        <a
          href="mailto:wakhareshreyas@mail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          wakhareshreyas@mail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
