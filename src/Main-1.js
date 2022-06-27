// import slab_img from "./img/slab.png"
import analy_img from "./img/analytics-img.png"
// import smallslab_img from "./img/small-slab.png"

const Main_1 = () =>{
    return (
        <section className="main-1">
            <article className="col-2">
                <div>
                    <h2>Talent Services</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Inventore ducimus, explicabo.
                    </p>
                </div>
                <div>
                    <img src="#"></img>
                    <h3>What&apos;s your Pain Point</h3>
                    <p>
                        Get access to top talent, adhere to local regulations, payroll.
                        manage cultural differences and, importantly, retain your top hires.
                    </p>
                </div>
                <div>
                    <img src="#"></img>
                    <h3>Value Proposition</h3>
                    <p>
                        Please think of us as your extended team. We help you with cost
                        estimation, finding the best talent for your needs, active help in recruitment, 
                        post recruitment compliances and managing your remote team. All you need to 
                        worry about is paying the bills on time.
                    </p>
                </div>
            </article>
            <figure className="col-2">
                <div className="main1-img-container">
                    <img src={analy_img}></img>
                </div>
            </figure>
        </section>
    );
}
export default Main_1;