import React from "react";
import "./Header.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

const Header = ({ search, setSearch }) => {
  console.log(search);
  return (
    <div className="header d-flex justify-content-between">
      <h1>MealDB</h1>
      <ButtonsExample search={search} setSearch={setSearch}></ButtonsExample>
    </div>
  );
};

export default Header;

function ButtonsExample({ search, setSearch }) {
  return (
    <>
      <InputGroup className="mb-3 w-50 ">
        <Form.Control
          placeholder="Search by meal name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </>
  );
}

// export default ButtonsExample;
