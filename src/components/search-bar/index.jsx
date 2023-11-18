import PropTypes from "prop-types";
import "./search-bar.css";

export const SearchBar = ({
  filterText = "",
  inWhishListOnly = false,
  setFilterText = () => null,
  setInWhishListOnly = () => null,
}) => {
  return (
    <form className="filter-form">
      <input
        type="text"
        className="search-input"
        placeholder="Пошук по назві"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <label className="search-label">
        <input
          type="checkbox"
          className="in-whish-list-checkbox"
          value={inWhishListOnly}
          onChange={(e) => setInWhishListOnly(e.target.checked)}
        />
        Тільки в списку бажаного
      </label>
    </form>
  );
};

SearchBar.propTypes = {
  filterText: PropTypes.string,
  inWhishListOnly: PropTypes.bool,
  setFilterText: PropTypes.func,
  setInWhishListOnly: PropTypes.func,
};
