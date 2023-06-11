import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetWithCategoryQuery } from '../../request/apiProducts';

import {
  ToMain,
  ProductStyled,
  CategoryTitle,
  List,
} from './WithCategory.styled';
import Product from '../Product/Product';
import { ROUTER } from '../../utils/routes';

const WithCategory = () => {
  const { name } = useParams();

  const { data, isLoading } = useGetWithCategoryQuery({ name });

  return (
    <ProductStyled>
      <CategoryTitle>{name}</CategoryTitle>
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

      <Link to={ROUTER.HOME}>
        <ToMain>
          На головну з: <span>{name}</span>{' '}
        </ToMain>
      </Link>
    </ProductStyled>
  );
};

export default WithCategory;
