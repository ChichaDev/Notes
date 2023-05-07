import { useContext } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { AppContext } from "../context/AppProvider";

import { FaTimes } from "react-icons/fa";

export const SearchBox = () => {
  const {
    searchValue,
    handleSearchChange,
    setSearchValue,
    getAllNotes,
    setHasFilteredNotes,
  } = useContext(AppContext);

  const handleSearchClear = () => {
    setSearchValue("");
    setHasFilteredNotes(true);
    getAllNotes();
  };

  return (
    <form className="d-flex ms-auto">
      <InputGroup>
        <FormControl
          type="search"
          placeholder="Search notes"
          aria-label="Search notes"
          value={searchValue}
          onChange={handleSearchChange}
          autoComplete="off"
          className="custom-input"
        />
        {searchValue && (
          <InputGroup.Text
            style={{ cursor: "pointer" }}
            onClick={handleSearchClear}
          >
            <FaTimes />
          </InputGroup.Text>
        )}
      </InputGroup>
    </form>
  );
};
