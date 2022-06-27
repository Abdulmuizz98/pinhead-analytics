// import slab_img from "./img/slab.png"
// import analy_img from "./img/analytics-img.png"
// import smallslab_img from "./img/small-slab.png"
import Card from "./Card.js";

const Main_2 = () =>{
    return (
        <section className="main-2">
            <article className="col-1">
                <h2>Best Services</h2>
                <h3>Pinhead Analytics Services</h3>
                <p>
                    We help you with all services mentioned here. Click any of them to find out more details.
                </p>
            </article>
            <div className="cards">
               <Card title="Requirement Mapping"/>
               <Card title="Cost Estimate"/>
               <Card title="Candidate Sourcing"/>
               <Card title="Data Monetization"/>
               <Card title="Data Monetization"/>
               <Card title="Background Check"/>
            </div>
        </section>
    );
};
export default Main_2;