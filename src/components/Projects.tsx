import React from "react";
import { interior, lighting, outdoor, urban } from "../assets";
import "../styles/project.css";
const Projects = () => {
  return (
    <section className="section-project">
      <div className="section-title project-title">
        <h5>Our Projects</h5>
        <h1>Best and standout among peers</h1>
        <div className="line"></div>
      </div>
      {/* images section */}
      <div className="images-project-section">
        <div className="image-container">
          {" "}
          <img src={interior} alt="" />
          <div className="image-hover">
            <div className="absolute-project">
            <h3>Interior Design</h3>
            <h1>Modern Shopping Center</h1>
            </div>
          </div>
        </div>

        <div className="image-container">
          <img src={outdoor} alt="" />
          <div className="image-hover">
            <div className="absolute-project">
            <h3>Outdoor Design</h3>
            <h1>Energy Efficiency</h1>
            </div>
          </div>
        </div>

        <div className="image-container">
          {" "}
          <img src={lighting} alt="" />
          <div className="image-hover">
            <div className="absolute-project">
            <h3>Building Engineering</h3>
            <h1>Lighting Design</h1>
            </div>
          </div>
        </div>

        <div className="image-container">
          <img src={urban} alt="" />
          <div className="image-hover">
            <div className="absolute-project">
            <h3>Urban Design</h3>
            <h1>Window Films</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
