import PropTypes from "prop-types"
import React, {useState} from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import LogoImage from "./logo-image"

const Header = ({ siteTitle }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header-container">
      <Navbar fixed="top" light expand="sm" className="navbar">
        <span>
          <LogoImage/>
        </span> 
        <NavbarBrand href="/" className="navbar-brand">{siteTitle}</NavbarBrand>  
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto nav" navbar>
            <NavItem>
              <NavLink href="/" >Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/categories">Categories</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tags/">Tags</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>          
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
 
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
