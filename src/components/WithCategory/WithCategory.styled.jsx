import styled from '@emotion/styled';

export const ProductStyled = styled.section`
  width: 100%;
  padding: 25px 22px;
`;

export const CategoryTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 28px;

  text-transform: uppercase;
`;

export const List = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ToMain = styled.div`
  margin: 20px 0px;
  color: black;

  span {
    text-transform: uppercase;
  }

  :hover {
    color: tomato;
  }
`;
