import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer__links">
                    <a href="https://www.linkedin.com/in/kyle-chau-a8727926a/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                    <a href="https://github.com/kylechau123" target="_blank" rel="noreferrer"><BsGithub /></a>
                    <a href="https://www.instagram.com/kylechaaau/?ref=badge" target="_blank" rel="noreferrer"><BsInstagram /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
