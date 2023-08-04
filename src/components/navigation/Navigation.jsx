import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import useAuth from 'hooks';
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
const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink className={css.link} to="/">
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink className={css.link} to="/contacts">
          Contacts
        </StyledLink>
      )}
    </nav>
  );
};

export default Navigation