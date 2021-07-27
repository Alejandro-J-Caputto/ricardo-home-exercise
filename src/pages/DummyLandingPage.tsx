import React from "react";
import SearchBar from "../components/search/SearchBar";
import { HeroSection } from "./HeroSection";
import { SearchArticle } from "../types/response.types";
import { PresentationalArticles } from "../layout/PresentationalArticles";
import CardGridIntersection from "../layout/CardGridIntersection";
import Footer from "../layout/Footer";

const DummyLandingPage: React.FC<{
  dummyItems: SearchArticle[];
  theme: boolean;
}> = (props) => {
  return (
    <>
      <SearchBar theme={props.theme} />
      <main className="container-np">
        <HeroSection />
        <CardGridIntersection theme={props.theme} />
        <PresentationalArticles
          theme={props.theme}
          dummyItems={props.dummyItems}
        />
        <Footer />
      </main>
    </>
  );
};

export default DummyLandingPage;
