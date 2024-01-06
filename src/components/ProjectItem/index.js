import "./index.css";

const ProjectItem = (props) => {
  const { itemDetails } = props;
  const { projectName, projectLink, description, imageUrl } = itemDetails;
  return (
    <div className="p-item">
      <div className="p-details">
        <div className="i-details">
          <h1 className="p-h2">{projectName}</h1>
          <p>{description}</p>
          <button type="button" className="btn p-btn">
            View Project
          </button>
        </div>
      </div>
      <img className="p-img" src={imageUrl} alt="p-img" />
    </div>
  );
};
export default ProjectItem;
