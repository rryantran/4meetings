import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  align-items: center;
  background-color: #f2f2f2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  font-family: Roboto, sans-serif;
  font-weight: 900;
  color: black;
  text-decoration: none;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

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
