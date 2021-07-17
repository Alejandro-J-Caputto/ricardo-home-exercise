import arnold from "../assets/img/message--arnold.jpg";
const ArticleItemView = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-container">
          <img src={arnold} alt="test" className="card-container__image" />
        </div>
        <div className="card-body">
          <div className="card-body__title">
            <h2>Arnold Schwarzenegger</h2>
          </div>
          <div className="card-body__info">
            <p> <span> Seller:</span> Sylvester Stallone</p>
            <p> <span> Price: </span>9000 CHF</p>
          </div>
          <div className="card-body__description">
            <div className="card-body__description-title">
              <p>Arnold Schwarzenegger Predator Edition</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                reiciendis fugit ab quia facilis. Tempore, consequatur ducimus.
                Consequatur, velit fuga ut adipisci omnis cum eligendi nisi odit
                architecto debitis dicta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItemView;
