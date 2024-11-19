import './App.css';
import {Header} from './layout/header/Header';
import {Main} from './layout/sections/main/Main';
import Skills from './layout/sections/skills/Skills';
import {Projects} from './layout/sections/projects/Projects';
import {Info} from './layout/sections/info/Info';
import {Contacts} from './layout/sections/contacts/Contacts';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <Info/>
            <Contacts/>
        </div>
    );
}

export default App;
