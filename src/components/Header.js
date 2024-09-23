import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Badge,
} from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand href="/">
         Shopping Cart
        </Navbar.Brand>
        <Navbar.Text>
          <FormControl
            style={{ width: 500 }}
            placeholder="search"
            className="m-auto"
          />
        </Navbar.Text>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart
              style={{ marginRight: "2px",  }}
            />
            <Badge bg="secondary" >
              9
            </Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{minWidth : 370, padding : 10 ,}}>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
