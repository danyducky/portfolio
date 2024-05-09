import './About.scss';
import withFade from "../Common/Hocs/withFade";

const fadeTransition = {
    delay: 0.5,
    duration: 2,
    ease: "easeIn"
}

function About() {
    return (
        <div className='about__container'>
            <div className='about__container__title'>
                <div>
                    <h1 className='large-intro'>
                        <span>Experience Developer</span>
                    </h1>

                    <h1 className='small-intro'>
                    <span className='weight-medium wide-intro'>
                        My passion is experience and my tool is programming. I’ve<br/>
                        worked many successful companies across the world to<br/>
                        create stunning experiences their customers.<br/>
                    </span>
                    </h1>

                    <br/>

                    <span>— Danil Morikov</span>
                </div>
            </div>

            <div className='about__container__section'>
                <div className='about__container__section__title'>Expertise</div>
                <div className='about__container__section__content'>
                    Throughout years I have been practising many different<br/>
                    disciplines and areas of digital experience programming.<br/>

                    <br/>

                    Here is an overview of my expertise and skills.

                    <div className='about__container__section__content__list'>
                        <div>
                            asd
                        </div>
                        <div>
                            qwe
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withFade(About, fadeTransition);