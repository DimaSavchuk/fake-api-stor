import React from 'react';

import { Nav, Menu, NavLinks } from './Navigation.styled';

import { useGetCategoryQuery } from '../../request/apiProducts';

const Navigation = () => {
  const { data, isLoading } = useGetCategoryQuery();

  return (
    <Nav>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Menu>
          {data.map((element, idx) => (
            <li key={idx}>
              <NavLinks to={`/products/category/${element}`}>
                {element}
              </NavLinks>
            </li>
          ))}
        </Menu>
      )}
    </Nav>
  );
};

export default Navigation;
