import useIntersection from "../hooks/useIntersection";

import reactImg from "../assets/img/react-logo.png";
import sassImg from "../assets/img/sass.jpg";
import reduxImg from "../assets/img/redux.jpg";
import tsImg from "../assets/img/ts-logo.png";

const CardGridIntersection: React.FC<{ theme: boolean }> = (props) => {
  const { setObsItem } = useIntersection({ threshold: 0.05 });

  return (
    <section ref={setObsItem} className={`features ${props.theme && "dark"}`}>
      <div className={`card-home card-home--1 ${props.theme && "dark"}`}>
        <div className="card-home-head">
          <img
            src={reactImg}
            alt="buy ilustration"
            className="card-home-head__img"
          />
        </div>
        <div className="card-home-body">
          <div className="card-home-body__title">
            <h3>React JS</h3>
          </div>
          <div className="card-home-body__content">
            <p>
              As always, it was really fun to work with React.
              <br />
              <br />I really would love to keep working with React & Ricardo ;)
              learn and get better and better.
            </p>
          </div>
        </div>
      </div>

      <div className={`card-home card-home--2 ${props.theme && "dark"}`}>
        <div className="card-home-head">
          <img
            src={tsImg}
            alt="buy ilustration"
            className="card-home-head__img"
          />
        </div>
        <div className="card-home-body">
          <div className="card-home-body__title">
            <h3>TypeScript</h3>
          </div>
          <div className="card-home-body__content">
            <p>
              I find TypeScript really important and I like to work with it,
              some times it is hard to find the right type hah, but in the end
              it is worth the effort.
            </p>
            <p>I have too keep learning though</p>
          </div>
        </div>
      </div>
      <div className={`card-home card-home--3 ${props.theme && "dark"}`}>
        <div className="card-home-head">
          <img
            src={reduxImg}
            alt="buy ilustration"
            className="card-home-head__img"
          />
        </div>
        <div className="card-home-body">
          <div className="card-home-body__title">
            <h3>It was not necessary but...</h3>
          </div>
          <div className="card-home-body__content">
            <p>
              I wanted to make a small version with some added features and
              show that I can work with it. I thought it was a nice ocassion to
              improove and get better with react-redux too.
            </p>
          </div>
        </div>
      </div>
      <div className={`card-home card-home--4 ${props.theme && "dark"}`}>
        <div className="card-home-head">
          <img
            src={sassImg}
            alt="buy ilustration"
            className="card-home-head__img"
          />
        </div>
        <div className="card-home-body">
          <div className="card-home-body__title">
            <h3>Partials </h3>
          </div>
          <div className="card-home-body__content">
            <p>I like too work with Sass partials.</p>
            <br />
            <p>
              I would like to work with other approaches as CSS Modules or
              Styled Components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardGridIntersection;
