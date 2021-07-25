import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../redux/store/store";

const SearchBar: React.FC<{}> = (props) => {
  const history = useHistory();
  const UI =  useSelector((state:RootState) => state.uiLoading);

  const {uiTheme} = UI;
  const [enteredText, setEnteredText] = useState("");

  const [searchInputIsValid, setSearchInputIsValid] = useState<boolean>(false);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredText(event.target.value);
  };
  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    history.push(`/home-exercise/search/${enteredText}`);
  };

  useEffect(() => {
    const validTimer = setTimeout(() => {
      setSearchInputIsValid(enteredText.trim().length > 3);
    }, 500);
    return () => {
      clearInterval(validTimer);
    };
  }, [enteredText]);

  return (
    <div className="searchBar">
      <form className="searchBar-group">
        <input
          onChange={inputChangeHandler}
          type="text"
          name="search"
          id="search"
          placeholder="Search Article"
          className={`searchBar-group__input ${uiTheme && 'dark'}`}
          autoComplete="off"
        />
        <label htmlFor="search" className="searchBar-group__label">
          Search Article
        </label>
        <button
          onClick={submitHandler}
          className={`btn btn-search ${uiTheme && 'dark'}`}
          disabled={!searchInputIsValid}
        >
          <i className="fas fa-search"></i>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
