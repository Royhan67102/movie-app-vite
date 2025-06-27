import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarContainer = styled.div`
  width: 100vw;
  left: 0;
  top: 0;
  background-color: #4361ee;
  position: fixed;
  z-index: 100;
`;

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Brand = styled.h1`
  color: white;
  font-size: 1.3rem;
  margin: 0;
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  @media (max-width: 991px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  list-style: none;
  padding: 0.5rem 1rem;
  margin: 0;

  @media (max-width: 991px) {
    position: absolute;
    top: 64px;
    right: 0;
    background: #4361ee;
    flex-direction: column;
    width: 200px;
    gap: 0;
    box-shadow: 0 8px 16px rgba(8, 85, 228, 0.1);
    display: ${props => (props.open ? "flex" : "none")};
    z-index: 99;
    border-radius: 0 0 0 10px;
    overflow: hidden;
  }
`;

const NavItem = styled.li`
  @media (max-width: 991px) {
    border-bottom: 1px solidrgb(52, 117, 209);
    &:last-child {
      border-bottom: none;
    }
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: block;
  padding: 1rem 0.5rem;
  &:hover {
    opacity: 0.8;
    background:rgb(0, 67, 160);
  }
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Brand>Movie App</Brand>
        <Hamburger onClick={() => setMenuOpen((open) => !open)}>
          &#9776;
        </Hamburger>
        <NavList open={menuOpen}>
          <NavItem>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/movie/create" onClick={() => setMenuOpen(false)}>Add Movie</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/movie/popular" onClick={() => setMenuOpen(false)}>Popular</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/movie/now" onClick={() => setMenuOpen(false)}>Now Playing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/movie/top" onClick={() => setMenuOpen(false)}>Top Rated</NavLink>
          </NavItem>
        </NavList>
      </NavbarWrapper>
    </NavbarContainer>
  );
}

export default Navbar;