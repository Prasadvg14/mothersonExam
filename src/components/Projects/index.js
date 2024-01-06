import ProjectsContext from "../../context/ProjectsContext";
import { FaInstagram, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import ProjectItem from "../ProjectItem";

import "./index.css";

const Projects = () => {
  const c = "c";
  return (
    <ProjectsContext.Consumer>
      {(value) => {
        const { projectsList } = value;
        return (
          <div className="projects">
            <h1 className="p-h1">Projects</h1>
            <hr />
            <ul className="p-items">
              {projectsList.map((each) => (
                <ProjectItem itemDetails={each} key={each.projectName} />
              ))}
            </ul>
            <ul className="ul icons">
              <li>
                <FaInstagram className="icon" />
              </li>
              <li>
                <FaLinkedin className="icon" />
              </li>
              <li>
                <IoIosMail className="icon m" />
              </li>
            </ul>
            <p className="line">
              Copyright <FaRegCopyright className="icon" /> 2024. All rights
              reserved
            </p>
            <img
              src="https://res.cloudinary.com/dv5f6io4i/image/upload/v1704468197/nnzkt84gk5rpgmzp8ltw.png"
              alt="footer-img"
              className="f-img"
            />
          </div>
        );
      }}
    </ProjectsContext.Consumer>
  );
};

export default Projects;
