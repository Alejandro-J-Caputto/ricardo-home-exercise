import SearchBar from "../components/search/SearchBar";
import { HeroSection } from "./HeroSection";

import lady from "../assets/img/buy-old-lady.jpg";
import smileGirl from "../assets/img/smile-girl.jpg";
import goodSmile from "../assets/img/ricardo-good-smile.jpg";
import sales from "../assets/img/always-black.jpg";
import { SearchArticle } from "../types/response.types";
import { PresentationalArticles } from "../layout/PresentationalArticles";
const DummyLandingPage: React.FC<{ dummyItems: SearchArticle[] }> = (props) => {
  return (
    <>
      <SearchBar />
      <main className="container-np">
        <HeroSection />
        <section className="features">
          <div className="card-home card-home--1">
            <div className="card-home-head">
              <img
                src={sales}
                alt="buy ilustration"
                className="card-home-head__img"
              />
            </div>
            <div className="card-home-body">
              <div className="card-home-body__title">
                <h3>Always Black Friday</h3>
              </div>
              <div className="card-home-body__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  mollitia molestiae impedit officia excepturi dolorum
                  consequatur ut repellendus labore architecto!
                </p>
              </div>
            </div>
          </div>
          <div className="card-home card-home--2">
            <div className="card-home-head">
              <img
                src={smileGirl}
                alt="buy ilustration"
                className="card-home-head__img"
              />
            </div>
            <div className="card-home-body">
              <div className="card-home-body__title">
                <h3>The best deals are waiting</h3>
              </div>
              <div className="card-home-body__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  mollitia molestiae impedit officia excepturi dolorum
                  consequatur ut repellendus labore architecto!
                </p>
              </div>
            </div>
          </div>
          <div className="card-home card-home--3">
            <div className="card-home-head">
              <img
                src={lady}
                alt="buy ilustration"
                className="card-home-head__img"
              />
            </div>
            <div className="card-home-body">
              <div className="card-home-body__title">
                <h3>We make it easy for everyone</h3>
              </div>
              <div className="card-home-body__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  mollitia molestiae impedit officia excepturi dolorum
                  consequatur ut repellendus labore architecto!
                </p>
              </div>
            </div>
          </div>
          <div className="card-home card-home--4">
            <div className="card-home-head">
              <img
                src={goodSmile}
                alt="buy ilustration"
                className="card-home-head__img"
              />
            </div>
            <div className="card-home-body">
              <div className="card-home-body__title">
                <h3>Ricardo for good</h3>
              </div>
              <div className="card-home-body__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  mollitia molestiae impedit officia excepturi dolorum
                  consequatur ut repellendus labore architecto!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="default-items">
          <div className="default-items__title">
            <h2>Find the best products</h2>
          </div>
          <div className="default-items__grid">
            <PresentationalArticles dummyItems={props.dummyItems} />
          </div>
        </section>
        <footer className="footer">
          <div className="social">
            <ul className="social-list">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/ricardo_ch"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/ricardo_ch"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/user/ricardo777marketing"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/ricardo.ch/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/Ricardo.CH/"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  );
};

export default DummyLandingPage;
