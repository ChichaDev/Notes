import { Button, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

export const SearchBox = () => {
  return (
    <form className="d-flex ms-auto">
      <InputGroup>
        <FormControl
          type="search"
          placeholder="Search notes"
          aria-label="Search notes"
        />
        <Button variant="outline-secondary">
          <BsSearch />
        </Button>
      </InputGroup>
    </form>
  );
};
