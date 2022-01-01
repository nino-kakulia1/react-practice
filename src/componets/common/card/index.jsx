import "./style.scss";

function Card(props) {
  return (
    <a className="product-card" href="product-page.html">
      <img class="product-card__image" src={props.imageUrl} alt="" />
      <div className="product-card__content">
        <h3 className="product-card__category">{props.category}</h3>
        <h2 className="product-card__title">{props.title}</h2>
        <p className="product-card__description">{props.description}</p>
        <div className="product-card__price">${props.price}</div>
      </div>
    </a>
  );
}

export default Card;
