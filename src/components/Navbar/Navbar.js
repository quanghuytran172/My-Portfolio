import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarComponent = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 80px;
  background-color: transparent;
  color: #fff;
  transition: 0.3s ease-in-out;
  .container {
    height: 100%;
  }
  &.active {
    box-shadow: 0 3px 16px 0 rgb(0 0 0 / 10%);
    background-color: #fff;
    a {
      color: #111;
    }
    .text-logo {
      color: #6f4cff;
    }
    ion-icon {
      color: #111;
    }
  }
`;
const NavWrapped = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
`;

const Logo = styled.div`
  a {
    font-size: 35px;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
  }
`;
const NavMenu = styled.div`
  a {
    padding: 0 20px;
    transition: 0.2s ease-in-out;
  }
  a:hover {
    color: #6f4cff;
  }
  &.active {
    top: 0;
    a {
      color: #111;
    }
  }
  @media screen and (max-width: 960px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    height: 100vh;
    top: -150%;
    left: 0;
    background-color: #fff;
    padding-top: 80px;
    transition: 0.3s ease-in-out;
    a {
      margin: 20px 0;
      font-size: 25px;
    }
  }
`;

const Button = styled.button`
  display: none;
  border: none;
  z-index: 1000;
  background: transparent;
  ion-icon {
    color: #fff;
    font-size: 35px;
  }
  &.active {
    ion-icon {
      color: #111;
    }
  }
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [menuOpen, toggleMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 160) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  function scrollFunc(name) {
    if (name) {
      document.getElementById(name).scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    toggleMenu(false);
  }
  window.addEventListener("scroll", changeBackground);

  return (
    <NavbarComponent className={navbar ? "active" : ""}>
      <NavWrapped className="container">
        <Logo>
          <NavLink to="/" className="text-logo">
            Portfolio
          </NavLink>
        </Logo>
        <NavMenu className={menuOpen ? "active" : ""}>
          <NavLink to="#home" onClick={() => scrollFunc()}>
            Home
          </NavLink>
          <NavLink to="#about" onClick={() => scrollFunc("about")}>
            About
          </NavLink>
          <NavLink to="#services" onClick={() => scrollFunc("services")}>
            Services
          </NavLink>
          <NavLink to="#projects" onClick={() => scrollFunc("projects")}>
            Projects
          </NavLink>
          <NavLink to="#contact" onClick={() => scrollFunc("contact")}>
            Contact
          </NavLink>
        </NavMenu>
        <Button
          className={menuOpen ? "active" : ""}
          onClick={() => toggleMenu(!menuOpen)}
        >
          <ion-icon name={menuOpen ? "close-outline" : "menu"} />
        </Button>
      </NavWrapped>
    </NavbarComponent>
  );
};

export default Navbar;
