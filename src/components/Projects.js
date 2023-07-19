import projectsData from "../projectsData";
import Project from "./Project";

const Projects = () => {
    return (
        <section>
            <h1>Portfolio</h1>
            <div className="projects">
                {projectsData.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects