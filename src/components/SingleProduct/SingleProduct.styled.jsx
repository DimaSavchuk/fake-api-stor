import styled from '@emotion/styled';

export const SingleProductSection = styled.section`
  display: flex;
  flex-grow: 1;
  padding: 24px;
  column-gap: 32px;
`;

export const Info = styled.div`
  margin-left: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Images = styled.div`
  display: flex;
  gap: 20px;
`;

export const Current = styled.div`
  width: 375px;
  height: 550px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2em;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 10px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25em;
  color: var(--dark-sea);
`;

export const Description = styled.div`
  margin: 10px 0 10px 0;
  width: 400px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2em;
`;

export const ToCategory = styled.div`
  margin: 20px 0px;
  color: black;

  span {
    text-transform: uppercase;
  }

  :hover {
    color: tomato;
  }
`;
