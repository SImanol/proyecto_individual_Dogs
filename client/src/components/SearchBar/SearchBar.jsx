import './SearchBar.css'
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
    <div className="searchBar">
      <input
        class="searchbarInput"
        type="search"
        placeholder="Search by Breed" 
        value={dogName}
        onChange={handleSearch}
      />
      <button class="searchbarButton" onClick={() => onSearch()}>
         🔎
      </button>
    </div>
  );
};

export default SearchBar;