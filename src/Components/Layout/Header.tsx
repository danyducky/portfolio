import Navbar from "./Navbar";
import withFade from "../Common/Hocs/withFade";

const fadeTransition = {
    duration: 2,
    ease: "easeInOut",
}

function Header() {
    return <Navbar/>;
}

export default withFade(Header, fadeTransition);