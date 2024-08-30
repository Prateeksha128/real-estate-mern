import { useState } from "react";
import "./SearchBar.scss";
import { Logger } from "sass";

const types = ["buy", "rent"];
function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  function handletype(t) {
    setQuery({ ...query, type: t });
  }
  return (
    <div className='searchBar'>
      <div className='type'>
        {types.map((type) => (
          <button
            key={type}
            className={query.type === type ? "active" : ""}
            onClick={() => handletype(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type='text' name='location' placeholder='City Location' />
        <input
          type='number'
          name='minPrice'
          min={0}
          max={10000000}
          placeholder='Min Price'
        />
        <input
          type='number'
          name='maxPrice'
          min={0}
          max={10000000}
          placeholder='Max Price'
        />
        <button>
          <img src='/search.png' alt='search icon' />{" "}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
