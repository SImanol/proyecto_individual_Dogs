import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDogsByName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [dogName, setDogName] = useState("");

  const handleSearch = (event) => {
    let {value} = event.target
    setDogName(value)
  };

  const onSearch = () => {
    dispatch(searchDogsByName(dogName));
  };

  return (
    <div>
      <input
        className="searchbarInput"
        type="search"
        placeholder="Search by Breed"
        value={dogName}
        onChange={handleSearch}
      />
      <button className="searchbarButton" onClick={() => onSearch()}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;