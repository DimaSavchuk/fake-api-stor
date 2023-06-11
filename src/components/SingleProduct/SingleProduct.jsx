import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../../request/apiProducts';

import {
  SingleProductSection,
  Info,
  Images,
  Current,
  Title,
  Price,
  Description,
  ToCategory,
} from './SingleProduct.styled';
import { ROUTER } from '../../utils/routes';

const SingleProduct = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery({ id });
  const { image, title, price, description, category, rating } = data || {};

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <SingleProductSection>
          <Images>
            <Current style={{ backgroundImage: `url(${image})` }} />
          </Images>
          <Info>
            <Title>{title}</Title>
            <Price>Category: {category}</Price>
            <Price>Price: {price}$</Price>
            <Description>{description}</Description>
            <Price>
              Rating: {rating.rate} | Count: {rating.count}
            </Price>

            <Link to={`/products/category/${category}`}>
              {' '}
              <ToCategory>
                Повернутися до категорії: <span>{category}</span>
              </ToCategory>
            </Link>

            <Link to={ROUTER.HOME}>
              <ToCategory>На головну</ToCategory>
            </Link>
          </Info>
        </SingleProductSection>
      )}
    </>
  );
};

export default SingleProduct;
