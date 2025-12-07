import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Fintech Platform</h4>
                  <p>Finance & Technology</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, Node.js, MongoDB, Payment Gateway Integration</p>
            </div>
            <WorkImage image="/images/fin.jpg" alt="Fintech Platform" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Neuroid AI</h4>
                  <p>Machine Learning</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, TensorFlow, Neural Networks, Data Processing</p>
            </div>
            <WorkImage image="/images/neuroid.jpg" alt="Neuroid AI" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>AI Traffic Management</h4>
                  <p>Smart City Solution</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Computer Vision, Python, Real-time Analytics, IoT</p>
            </div>
            <WorkImage image="/images/traffic.jpg" alt="AI Traffic Management" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Lead Management System</h4>
                  <p>Business Automation</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, Express.js, MySQL, CRM Integration</p>
            </div>
            <WorkImage image="/images/lead.jpg" alt="Lead Management System" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>Portfolio Website</h4>
                  <p>Personal Branding</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, TypeScript, Three.js, GSAP Animations</p>
            </div>
            <WorkImage image="/images/portfolio.webp" alt="Portfolio Website" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
