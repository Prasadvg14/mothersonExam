import { Route, Switch } from "react-router-dom";
import ProjectsContext from "./context/ProjectsContext";
import { Component } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";

import "./App.css";

let projectsList = [
  {
    projectName: "Jobby App ",
    description:
      "I created this personal project by cloning the job finding applications. With this project I have learned so many concepts in the reactJs.",
    projectLink: "https://prasadvg.ccbp.tech/",
    imageUrl:
      "https://cdn.dribbble.com/users/6252196/screenshots/15137473/media/98baf933d3e868b84b243e5d6b8c2549.png?resize=400x300&vertical=center",
  },

  {
    projectName: "App Store",
    description:
      "It is basic app store interface which is created using reactJs with the concepts fo Lists.",
    projectLink: "https://prasadvg14.ccbp.tech/",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3gwD8BciWi9gaVVzyvSgq0asKOfVYGrqgQ&usqp=CAU",
  },

  {
    projectName: "todo list",
    description:
      "I created this personal project to create a todo list to manage my tasks which included in my schedule.",
    projectLink: "url",
    imageUrl:
      "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

class App extends Component {
  state = { projectsList: projectsList };

  addNewProject = (projectsList) => {
    this.setState({
      projectsList,
    });
  };

  render() {
    const { projectsList } = this.state;
    return (
      <ProjectsContext.Provider
        value={{ projectsList, addNewProject: this.addNewProject }}
      >
        <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ProjectsContext.Provider>
    );
  }
}

export default App;
