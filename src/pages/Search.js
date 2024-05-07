import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search() {
  return (
    <div>
    <Form className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
    </div>
  );
}

export default Search;
