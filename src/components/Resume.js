import resume from '../assets/Resume.docx.pdf'

const Resume = () => {
    return (
        <section>
            <h1>Resume</h1>
            <div className="resume">
                <h3>Download my <a href={resume} className="resumeLink">resume</a></h3>
                <h2>Front-end proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bulma</li>
                </ul>

                <h2>Back-end proficiencies</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                    <li>React</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume