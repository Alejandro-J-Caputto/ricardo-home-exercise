import React from "react";
import SearchBar from "../components/search/SearchBar";
import { HeroSection } from "./HeroSection";
import { SearchArticle } from "../types/response.types";
import { PresentationalArticles } from "../layout/PresentationalArticles";
import CardGridIntersection from "../layout/CardGridIntersection";

const DummyLandingPage: React.FC<{
  dummyItems: SearchArticle[];
  theme: boolean;
}> = (props) => {
  return (
    <>
      <SearchBar />
      <main className="container-np">
        <HeroSection />
        <CardGridIntersection theme={props.theme} />
        <PresentationalArticles dummyItems={props.dummyItems} />
      </main>
    </>
  );
};

export default DummyLandingPage;
