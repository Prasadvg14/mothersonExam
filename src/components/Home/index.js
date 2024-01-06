import { Link } from "react-router-dom";
import { Component } from "react";
import AddProject from "../AddProject";

import "./index.css";

class Home extends Component {
  onClickProjects = () => {
    const { history } = this.props;
    history.push("/projects");
  };

  render() {
    return (
      <div className="bg">
        <div className="header">
          <div className="left">
            <p className="head">Madelyn Torff</p>
            <div className="info">
              <p className="designation">UI/UX DESIGNER</p>
              <h1 className="h1">Hello, my name is Madelyn Torff</h1>
              <p className="p">
                Short text with details about you, what you do or your
                professional career. You can add more information on the about
                page.
              </p>
              <ul className="">
                <li>
                  <button
                    type="button"
                    onClick={this.onClickProjects}
                    className="y-btn"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button type="button " className="btn">
                    LinkedIn
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <nav className="nav ">
              <ul className="ul">
                <li>About</li>
                <Link to="/projects">
                  <li>Projects</li>
                </Link>
                <li>Contacts</li>
              </ul>
            </nav>
            <img
              src="https://res.cloudinary.com/dv5f6io4i/image/upload/v1704453311/yahyrqoo7hvucm9tydqc.png"
              alt="girl"
              className="g-img"
            />
          </div>
        </div>
        <AddProject />
      </div>
    );
  }
}

export default Home;
