// import slab_img from "./img/slab.png"
// import analy_img from "./img/analytics-img.png"
// import smallslab_img from "./img/small-slab.png"
import Card from "./Card.js";

const Main_3 = () =>{
    return (
        <section className="main-3">
            <article className="col-1">
                    <h2>Best Services</h2>
                    <h3>Post Hire</h3>
                    <p>
                        We manage it in the best possible way, as per client & employee needs,
                         focusing on effective delivery and satisfaction.
                    </p>
            </article>
            <div className="cards">
               <Card title="Compensation Structuring"/>
               <Card title="Payroll And Compliances"/>
               <Card title="Client Policies"/>
               <Card title="People Management"/>
               <Card title="Employee Engagement"/>
               <Card title="Artificial Intelligence"/>
            </div>
        </section>
    );
}
export default Main_3;