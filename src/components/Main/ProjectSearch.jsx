import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function ProjectSearch({ setSearchTerm }) {
  const handleSearch = (event) => {
    setInputValue(event.target.value);
  };

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue, setSearchTerm]);

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          id="search-input"
          placeholder="Search articles..."
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

ProjectSearch.propTypes = { setSearchTerm: PropTypes.func.isRequired };
