import user from '../assets/img/user.jpg';

const About = () => {
    return (
        <section>
            <h1>About Me</h1>
            <img src={user} alt='me' width={150} className='userImage' />
            <p>Lavell is a seasoned leader with a diverse range of expertise spanning more than two decades. His corporate, management, and technological acumen are evidenced in his roles as a full-stack developer, CEO of Brag House, a leading social network for nonprofessional college gamers, and a corporate lawyer. He's proven his strategic leadership ability by growing Brag House into a preeminent engagement platform for Gen Z, generating $20mm in ARR, and leading it to a Nasdaq listing.</p>
            <p>Alongside these achievements, Lavell has shown his innovative approach by developing a financial platform that optimized the economic potential of NFL rookie athletes, a concept so successful that its intellectual property rights were bought by a Big 4 Bank. He also successfully negotiated a $6 million TV licensing deal for a professional soccer league. His legal expertise includes representing significant clients like Lehman Brothers in intricate securities and reorganization matters. This blend of leadership, innovation, and legal expertise primes Lavell for a transition into a technology director role, where he can leverage his skills to foster cutting-edge innovation.</p>

        </section>
    )
}

export default About;