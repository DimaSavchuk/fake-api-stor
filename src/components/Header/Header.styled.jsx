import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const TopBar = styled.section`
  width: 100%;
  height: 60px;
  background-color: black;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
`;

export const NavBar = styled.div`
  display: flex;
  gap: 40px;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.div`
  font-size: 25px;
  color: white;
`;

export const Form = styled.form`
  position: relative;
`;
export const Input = styled.input``;

export const Box = styled.div`
  z-index: 9;
  top: 120%;
  position: absolute;
  width: 100%;
  left: 0;
  max-height: 300px;
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  background: black;
  border-radius: 8px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled(Link)`
  font-size: 13px;
  color: gray;
  display: flex;
  align-items: center;
  column-gap: 16px;
  :hover {
    color: white;
  }
`;

export const Image = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
  height: 50px;
  width: 50px;
`;

export const Title = styled.div``;
