import './Home.scss'

import TypeWriter from "../Common/TypeWriter";
import Collapsable from "../Common/Collapsable";
import withFade from "../Common/Hocs/withFade";
import GitHubStatistic from "../Common/GitHubStatistic";

const fadeTransition = {
    delay: 0.5,
    duration: 2,
    ease: "easeIn"
}

function Home() {
    const keyPhrases = [
        'Building distributed applications.',
        'Building web and desktop applications.',
        'Contributing to Open Source.',
    ];

    return (
        <div className='home__container'>
            <h4 className='smaller-intro weight-light'>
                <span>Senior Software Developer</span>
            </h4>
            <h1 className='large-intro'>
                <span>Danil Morikov</span>
            </h1>
            <h1 className='small-intro'>
                <span className='weight-medium'>
                    I’m a software developer — creating brilliant web & <br/>
                    desktop applications over 3 years.<br/>
                </span>

                <br/>

                <Collapsable waitBeforeShow={2000}>
                    <TypeWriter words={keyPhrases}/>
                </Collapsable>

                <br/>

                <GitHubStatistic username='danyducky'/>
            </h1>
        </div>
    )
}

export default withFade(Home, fadeTransition);