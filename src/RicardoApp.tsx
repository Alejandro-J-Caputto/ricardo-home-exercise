// import ArticlesContainer from "./components/articles/ArticlesContainer";
// import SearchBar from "./components/search/SearchBar";
import AppRouter from "./routers/AppRouter";
import RicardoWrapper from "./layout/RicardoWrapper";

const RicardoApp: React.FC = () => {
  return (
    <RicardoWrapper>
      <AppRouter />
    </RicardoWrapper>
  );
};

export default RicardoApp;
