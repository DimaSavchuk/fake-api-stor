import React from 'react';
import { useGetTrendingQuery } from '../../request/apiProducts';

import { ProductsStyled, List, CategoryTitle } from './Trending.styled';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { ROUTER } from '../../utils/routes';

const Trending = ({ title }) => {
  const { data, isLoading } = useGetTrendingQuery();

  console.log(data);
  return (
    <ProductsStyled>
      <CategoryTitle>{title}</CategoryTitle>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <List>
            {data.map(({ id, title, image, price, rating }) => (
              <Product
                key={id}
                id={id}
                title={title}
                image={image}
                price={price}
                rating={rating}
              />
            ))}
          </List>
        )}
      </div>
    </ProductsStyled>
  );
};

export default Trending;
