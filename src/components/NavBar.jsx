import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  display: flex;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  background-color: #f2f2f2;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 4rem;
  width: 100%;
`;

const StyledLink = styled(Link)`
  font-family: Roboto, sans-serif;
  color: black;
  text-decoration: none;
`;

const LinkContainer = styled.div``;

const NavBar = () => {
  return (
    <NavBarContainer>
      <p>LOGO</p>

      <LinkContainer>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/">New Event</StyledLink>
      </LinkContainer>
    </NavBarContainer>
  );
};

export default NavBar;
