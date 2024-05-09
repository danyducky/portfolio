import './Layout.scss'

import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <div className='layout'>

            <div className='layout__header'>
                <Header/>
            </div>

            <div className='layout__navigation'>
                <Outlet/>
            </div>

            <div className='layout__footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout;