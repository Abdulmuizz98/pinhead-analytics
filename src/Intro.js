// import slab_img from "./img/slab.png"
import analy_img from "./img/analytics-img.png"
// import smallslab_img from "./img/small-slab.png"

const Intro = () =>{
    return (
        <section className="intro">
            <article className="col-2">
                <h2>We're Lorem <br/><span>Pinhead Analytics</span></h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Inventore ducimus, explicabo.
                </p>
                <button>Discover More</button>
            </article>
            <figure className="col-2">
                <div className="intro-img-container">
                    <img src={analy_img}></img>
                </div>
            </figure>
        </section>
    );
}
export default Intro;