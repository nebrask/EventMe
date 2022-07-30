import React from "react";
import SearchBox, { components } from "tomtom-react-searchbox";
import "./../styles.css"

const API_KEY = "WtFBT6SAHRZqbwGb2Ioom8I9yAQoTu7B"

function SearchResult(props) {
  return (
    <div className={`my-result overlay${props.isSelected ? "-selected" : ""}`}>
      <components.Result {...props} />
    </div>
  );
}

function SearchBar() {
  return (
    <SearchBox 
      placeholder="Enter your location"
      components={{
        Result: SearchResult
      }}
      searchOptions={{
        key: API_KEY,
        language: "en-Gb",
        limit: 5,
        typeahead: true,
        //categorySet: "7315"
        
      }}
    />
  );
}

export default SearchBar;
