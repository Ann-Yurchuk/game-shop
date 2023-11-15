import "./search-bar.css";

export const SearchBar = () => {
  return (
    <form className="filter-form">
      <input
        type="text"
        className="search-input"
        placeholder="Пошук по назві"
      />
      <label className="search-label">
        <input type="checkbox" className="in-whish-list-checkbox" />
        Тільки в списку бажаного
      </label>
    </form>
  );
};
