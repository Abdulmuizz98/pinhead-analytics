import logo from "./img/Logo.png"

const About = () =>{
    return (
        <section className="about">
            <figure className="col-2 center-container">
                <div className="about-img-container center">
                    <img src={logo}></img>
                </div>
            </figure>
            <article className="col-2">
                <h2>About Pinhead Analytics</h2>
                <h3>How we are <br/>different from others ? </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Asperiores ab nobis deleniti ipsum debitis? Accusantium vel illum neque, 
                    delectus aliquid quam eius et dicta alias nostrum nulla distinctio error consequuntur?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Asperiores ab nobis deleniti ipsum debitis? Accusantium vel illum neque, 
                    delectus aliquid quam eius et dicta alias nostrum nulla distinctio error consequuntur?
                </p>
                <button>Know more</button>
            </article>
        </section>
    );
}
export default About;