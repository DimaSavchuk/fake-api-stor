import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useGetSearchQuery } from '../../request/apiProducts';
import {
  NavBar,
  LogoContainer,
  Logo,
  Form,
  Input,
  TopBar,
  Box,
  Item,
  Image,
  Title,
} from './Header.styled';
import { ROUTER } from '../../utils/routes';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        console.log(response);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setSearchResults(
      data.filter(row => {
        if (search === '') {
          return row;
        } else if (row.title.toLowerCase().includes(search.toLowerCase())) {
          return row;
        }
      })
    );
  }, [search, data]);

  const closeBox = () => {
    setSearch('');
  };

  return (
    <TopBar>
      <NavBar>
        <LogoContainer>
          <Link to={ROUTER.HOME}>
            <Logo>LOGO</Logo>
          </Link>
        </LogoContainer>

        <Navigation />
      </NavBar>

      <Form>
        <Input
          type="search"
          name="search"
          placeholder="Search..."
          autoComplete="off"
          onChange={event => {
            setSearch(event.target.value);
          }}
          value={search}
        />

        {search && (
          <Box>
            {searchResults.map((row, idx) => (
              <Item key={idx} to={`/products/${row.id}`} onClick={closeBox}>
                <Image
                  style={{
                    backgroundImage: `url(${row.image})`,
                  }}
                />
                <Title>{row.title}</Title>
              </Item>
            ))}
          </Box>
        )}
      </Form>
    </TopBar>
  );
};

export default Header;
