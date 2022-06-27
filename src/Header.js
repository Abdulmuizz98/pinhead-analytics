import Logo from "./logo.js"

const Intro = () =>{
    return (
        <header>    
            <nav className="navbar">
                <Logo/>
                <ul>
                    <li><a className="active">Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Intro;