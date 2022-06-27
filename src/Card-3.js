
const Card_3 = (prop) =>{
    return (
        <figure className="col-3">
            <div className="main1-img-container">
                <img src={prop.image}></img>
            </div>
            <figcaption>
                <small>by {prop.author}  {prop.comments} Comments</small>
                <h3>{prop.title}</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Inventore ducimus, explicabo.Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Inventore ducimus, explicabo.
                </p>
            </figcaption>
        </figure>
    );
}
export default Card_3;