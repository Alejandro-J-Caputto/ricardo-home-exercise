import React from "react";
import online from "../assets/img/Online store _Monochromatic (1).svg";

export const HeroSection:React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-heading">
        <h1 className="hero-heading__title">
          Welcome to <br /> <span>Ricardo</span>
        </h1>
        <h3 className="hero-heading__tertiary">
          We give to your valuable things a second home.
        </h3>
        <p className="hero-heading__paragraph">
          Bei Ricardo darf sich jedes Mitglied zuhause fühlen. Egal ob zum
          Stöbern, Einkaufen, Verkaufen oder zum Sammeln von inspirierenden
          Ideen – auf Ricardo gibt es Platz und Raum für alles und für alle.
        </p>
      </div>
      <div className="hero-img">
        <img className="hero-img__svg" src={online} alt="heading ilustration" />
      </div>
    </section>
  );
};
