
const Card_1 = (prop) =>{
    return (
        <figure className="col-3">
            <div className="main1-img-container">
                <img src={prop.image}></img>
            </div>
            <figcaption>
                <h3>{prop.title}</h3>
                <p>
                    Lorem ipsum 
                </p>
            </figcaption>
        </figure>
    );
}
export default Card_1;