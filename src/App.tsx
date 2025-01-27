import './App.css';
import {Header} from './layout/header/Header';
import {Main} from './layout/sections/main/Main';
import {Skills} from './layout/sections/skills/Skills';
import {Projects} from './layout/sections/projects/Projects';
import {Info} from './layout/sections/info/Info';
import {Contacts} from './layout/sections/contacts/Contacts';
import {Footer} from './layout/footer/Footer';
import {Sidebar} from './layout/sidebar/Sidebar';
import React, {useEffect, useState} from 'react';


function App() {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1144;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <div className="App">
            {width > breakpoint ?  <Sidebar/> : null}
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <Info/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
