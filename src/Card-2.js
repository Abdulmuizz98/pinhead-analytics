
const Card_2 = (prop) =>{
    return (
        <figure className="col-3">
            <div className="main1-img-container">
                <img src={prop.image}></img>
            </div>
            <figcaption>
                <h3>{prop.title}</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Inventore ducimus, explicabo.Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Inventore ducimus, explicabo.
                </p>
                <button>Learn More</button>
            </figcaption>
        </figure>
    );
}
export default Card_2;