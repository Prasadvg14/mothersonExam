import { Component } from "react";
import ProjectsContext from "../../context/ProjectsContext";
import "./index.css";

class AddProject extends Component {
  state = {
    projectName: "",
    projectLink: "",
    description: "",
    imageUrl: "",
    newProject: {},
  };

  onChangeProjectName = (event) => {
    this.setState({ projectName: event.target.value });
  };

  onChangeProjectLink = (event) => {
    this.setState({ projectLink: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  onChangeImageUrl = (event) => {
    this.setState({ imageUrl: event.target.value });
  };

  render() {
    const { projectName, projectLink, description, imageUrl } = this.state;
    return (
      <ProjectsContext.Consumer>
        {(value) => {
          const { projectsList, addNewProject } = value;
          const onSubmitForm = (event) => {
            event.preventDefault();
            const {
              projectName,
              projectLink,
              description,
              imageUrl,
            } = this.state;
            const newProject = {
              projectName,
              projectLink,
              description,
              imageUrl,
            };
            addNewProject([...projectsList, newProject]);
            this.setState({
              newProject,
              projectName: "",
              projectLink: "",
              description: "",
              imageUrl: "",
            });
          };
          return (
            <div className="add">
              <div>
                <h1 className="p-head">Add Project</h1>
                <form onSubmit={onSubmitForm} className="form">
                  <div className="inputs">
                    <label>Project Name</label>
                    <input
                      onChange={this.onChangeProjectName}
                      type="text"
                      placeholder="Project name"
                      value={projectName}
                    />
                  </div>
                  <div className="inputs">
                    <label>Project link</label>
                    <input
                      onChange={this.onChangeProjectLink}
                      type="text"
                      placeholder="Project link"
                      value={projectLink}
                    />
                  </div>
                  <div className="inputs">
                    <label>Image Url</label>
                    <input
                      onChange={this.onChangeImageUrl}
                      type="text"
                      placeholder="Image Url"
                      value={imageUrl}
                    />
                  </div>
                  <div className="inputs">
                    <label>Description</label>
                    <textarea
                      onChange={this.onChangeDescription}
                      className="textArea"
                      type="area"
                      placeholder="Description"
                      value={description}
                    />
                  </div>
                  <button type="submit" className="y-btn add-btn">
                    Add
                  </button>
                </form>
              </div>
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
  }
}

export default AddProject;
