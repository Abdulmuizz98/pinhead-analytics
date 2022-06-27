import {render} from "react-dom";
import Header from "./Header.js"
import Intro from "./Intro.js"
import About from "./About.js"
import Main_1 from "./Main-1.js";
import Main_2 from "./Main-2.js";
import Main_3 from "./Main-3.js";
import Main_4 from "./Main-4.js";
import Main_5 from "./Main-5.js";
import Main_6 from "./Main-6.js";
import Main_7 from "./Main-7.js";

const App = () =>{
    return (
        <div className="app-container">
            <Header/>
            <Intro/>
            <About/>
            <Main_1/>
            <Main_2/>
            <Main_3/>
            <Main_4/>
            <Main_5/>
            <Main_6/>
            <Main_7/>
        </div>
    );
};
render(<App/>,  document.getElementById("root"));