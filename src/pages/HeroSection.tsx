import React from "react";
import online from "../assets/img/Online store _Monochromatic (1).svg";

export const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-heading">
        <h1 className="hero-heading__title">
          <span>Ricardo</span> Home-Exercise
        </h1>
        <h3 className="hero-heading__tertiary">I hope you like it!</h3>
        <p className="hero-heading__paragraph">
          I have made three versions: <br />
           1. Exercise with minimal requirements. <br />
           2. Exercise with some features and redux. <br />
           3. Exercise with some features and no redux. <br />
        </p>
      </div>
      <div className="hero-img">
        <img className="hero-img__svg" src={online} alt="heading ilustration" />
      </div>
    </section>
  );
};
