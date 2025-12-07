import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Saanjh Studio</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed responsive web applications using React and modern frontend technologies. Collaborated with design teams to create seamless user experiences and implemented interactive UI components.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>General Secretary</h4>
                <h5>AISA</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led organizational initiatives and coordinated technical events. Managed team communications and contributed to strategic planning for technology-focused student activities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Intern</h4>
                <h5>Coincent.Ai</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on machine learning models and AI-driven solutions. Implementing data preprocessing pipelines, training neural networks, and optimizing model performance for real-world applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
