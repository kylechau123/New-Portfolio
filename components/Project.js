import { BsGithub } from "react-icons/bs";

const Project = ({ project }) => {
    return (
        <div className="project">
            <img src={project.image} alt={project.name} />
            <a href={project.deploy}><h3>{project.name}</h3></a>
            <a href={project.github} className="projectGithub"><BsGithub /></a>
            <p>{project.stack}</p>
        </div>
    );
}

export default Project;