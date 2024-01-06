import React from "react";

const ProjectsContext = React.createContext({
  projectsList: [],
  addNewProject: () => {},
});

export default ProjectsContext;
