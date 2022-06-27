// import slab_img from "./img/slab.png"
// import analy_img from "./img/analytics-img.png"
// import smallslab_img from "./img/small-slab.png"
import Card_2 from "./Card-2.js";
import Card_3 from "./Card-3.js";

const Main_6 = () =>{
    return (
        <section className="main-6">
            <article className="col-1">
                <h2>Pre Hire</h2>
                <h3>How Do We Help</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Inventore ducimus, explicabo.We help you with all services mentioned here. 
                </p>
            </article>
            <div className="cards">
               <Card_2 title="Talent Services"/>
               <Card_2 title="Asia GTM Partnership"/>
               <Card_2 title="Investment And Advisory"/>
            </div>
            <article className="col-1">
                <h2>Case Study</h2>
                <h3>Pinhead Analytics Case Study</h3>
            </article>
            <div className="cards">
               <Card_3 title="How to become a successful businessman."/>
               <Card_3 title="Services that will Grow Your Business for you!"/>
               <Card_3 title="Online Trends That Have Gone Stale."/>
            </div>
        </section>
    );
};
export default Main_6;