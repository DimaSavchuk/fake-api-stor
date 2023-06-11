import React from 'react';

import {
  ListItem,
  ProductLink,
  Image,
  Wrapper,
  Title,
  Cat,
  Infor,
  Prices,
  Price,
} from './Product.styled';

const Product = ({ id, title, image, price, rating }) => {
  return (
    <ListItem>
      <ProductLink to={`/products/${id}`}>
        <Image style={{ backgroundImage: `url(${image})` }} />
        <Wrapper>
          <Title>{title}</Title>
          <Cat>
            Rate: {rating.rate} | Count: {rating.count}
          </Cat>
          <Infor>
            <Prices>
              <Price>{price} $</Price>
            </Prices>
          </Infor>
        </Wrapper>
      </ProductLink>
    </ListItem>
  );
};

export default Product;
