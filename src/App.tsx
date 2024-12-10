import './App.css';
import {Header} from './layout/header/Header';
import {Main} from './layout/sections/main/Main';
import Skills from './layout/sections/skills/Skills';
import {Projects} from './layout/sections/projects/Projects';
import {Info} from './layout/sections/info/Info';
import {Contacts} from './layout/sections/contacts/Contacts';
import {Footer} from './layout/footer/Footer';
import {Sidebar} from './layout/sidebar/Sidebar';
import React from 'react';


function App() {
    return (
        <div className="App">
            <Sidebar/>
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
