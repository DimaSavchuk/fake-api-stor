import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListItem = styled.li`
  border: 1px solid black;
  overflow: hidden;
  width: calc(94% / 5);
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid tomato;
  }
`;

export const ProductLink = styled(Link)``;

export const Image = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Wrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: black;
  margin-top: 10px;
`;

export const Cat = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: gray;
  text-transform: uppercase;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const Infor = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Prices = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: black;
`;

export const OldPrices = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-decoration-line: line-through;
  color: black;
`;

export const Stock = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: gray;
`;
