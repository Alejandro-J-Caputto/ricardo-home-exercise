import React from "react";

const SearchFilter: React.FC<{
  searchTerm: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <div className="filterItem">
      <form className="filterItem-group">
        <input
          autoComplete="off"
          type="text"
          name="filter"
          placeholder="Filter by name"
          value={props.searchTerm}
          onChange={props.handleInputChange}
          id="filter"
          className="filterItem__input"
        />
        <label htmlFor="filter" className="filterItem__label">
          Filter
        </label>
      </form>
    </div>
  );
};

export default SearchFilter;
