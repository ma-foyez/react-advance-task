import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CounterComponentDislpay from '../counter/CounterComponentDislpay';

import { useSelector } from "react-redux";

const Header = () => {

    const tasks = useSelector((state) => state.TaskReducer.tasks);
    const counter = useSelector((state) => state.CounterReducer.counter);
    
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          React-Redux Complete Task App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/" className="nav-link">
              Tasks
              <span className="badge badge-danger">{tasks.length}</span>
            </Link>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
            <Link to="/about-us" className="nav-link">
              {counter}
            </Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header;