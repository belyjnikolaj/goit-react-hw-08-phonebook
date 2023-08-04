import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    color: rgb(245, 124, 0);
  }
 &:hover {
  text-decoration: underline;
 }
`;

const AuthNav = () => {
  return (
    <div>
      <StyledLink className={css.link} to="/register">
        Register
      </StyledLink>
      <StyledLink className={css.link} to="/login">
        Log In
      </StyledLink>
    </div>
  );
};
export default AuthNav;