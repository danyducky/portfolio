import './Footer.scss'
import withFade from "../Common/Hocs/withFade";

const fadeTransition = {
    delay: 0.5,
    duration: 2,
    ease: "easeIn"
}

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className='footer__container'>
            <h4>
                Follow Me
            </h4>

            <ul>
                <li>
                    <a href='https://www.instagram.com/danyducky/' target='_blank'
                       rel='noopener noreferrer'>Instagram</a>
                </li>
                <li>
                    <a href='https://github.com/danyducky/' target='_blank'
                       rel='noopener noreferrer'>GitHub</a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/danyducky/' target='_blank'
                       rel='noopener noreferrer'>LinkedIn</a>
                </li>
            </ul>

            <div className='footer__container__copyright'>
                <span>Danil Morikov —</span> Copyright © {year}
            </div>
        </div>
    )
}

export default withFade(Footer, fadeTransition);