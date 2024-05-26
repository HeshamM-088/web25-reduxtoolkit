import React from "react";
import { Navbar, Nav } from "rsuite";
import CogIcon from "@rsuite/icons/legacy/Cog";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="!bg-blue-gray-800 !text-white">
        <div className="container mx-auto">
          <Navbar.Brand as={Link} to="/">
            Context
          </Navbar.Brand>
          <Nav>
            <Nav.Item as={Link} to="/">
              Home
            </Nav.Item>
            <Nav.Item as={Link} to="/about">
              About
            </Nav.Item>
            <Nav.Item as={Link} to="/contact">
              Contact
            </Nav.Item>
            <Nav.Item as={Link} to="/login">
              Login
            </Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
