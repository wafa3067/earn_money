import { useState, React } from "react";

function CustomSearchBar({ options }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  };

  const handleOptionClick = (option) => {
    setSearchTerm(option);
    setShowOptions(false);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      {showOptions && filteredOptions.length > 0 && (
        <ul className="options">
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSearchBar;
