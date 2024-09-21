import PropTypes from "prop-types";

export default function ProjectSearch({ setSearchTerm }) {
  //   const handleSearch = (event) => {
  //     setSearchTerm(event.target.value);
  //   };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          id="search-input"
          placeholder="Search articles..."
          //   onChange={handleSearch}
        />
      </div>
    </div>
  );
}

ProjectSearch.PropTypes = { setSearchTerm: PropTypes.func.isRequired };
