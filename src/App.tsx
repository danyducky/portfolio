import './App.scss';

import {
    Navigate,
    Route,
    Routes, useLocation,
} from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";

import {AnimatePresence} from "framer-motion";

function App() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.key}>
                <Route element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='projects' element={<Projects/>}/>
                    <Route path='resume' element={<Resume/>}/>

                    <Route path='*' element={<Navigate to="/"/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

export default App;
