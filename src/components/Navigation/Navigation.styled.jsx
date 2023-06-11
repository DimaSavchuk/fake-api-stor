import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.div``;

export const Menu = styled.ul`
  display: flex;
  gap: 20px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #000000 #ffffff;
`;

export const NavLinks = styled(NavLink)`
  font-size: 16px;
  line-height: 1.2em;
  text-transform: capitalize;

  :hover {
    color: tomato;
    transition: 300ms cubic-bezier(0.65, 0.05, 0.36, 1);
  }
`;
