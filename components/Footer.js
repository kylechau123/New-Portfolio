import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer__links">
                    <a href="https://www.linkedin.com/in/lavell-juan-bh/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                    <a href="https://github.com/bragceo" target="_blank" rel="noreferrer"><BsGithub /></a>
                    <a href="https://twitter.com/juan_lavell?lang=en" target="_blank" rel="noreferrer"><BsTwitter /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
