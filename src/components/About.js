import user from '../assets/img/user.jpg';

const About = () => {
    return (
        <section>
            <h1>About Me</h1>
            <img src={user} alt='me' width={150} className='userImage' />
            <p>Kyle is a second generation Asian-American of Chinese descent. Born and raised in New Jersey, Kyle has had a lot of ambition growing up and wanted to do many things in life. Starting from an early age, he has always been involved with computers as well as sports. Although he has not attended a four year university his dreams never faultered at the site of financial hardships from not being able to properly go to one. He has always wanted to create his own game or program that people can use on a daily basis and now since finishing his coding bootcamp, he now has the opportunity to do so.</p>

        </section>
    )
}

export default About;