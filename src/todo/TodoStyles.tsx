import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  height: 100vh;
`;

export const Header = styled.header`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: #5d5dff;
  & > h1 {
    margin-left: 5px;
    color: white;
    font-size: 24px;
  }
  & > button {
    border: none;
    background-color: #8e8efe;
    width: 80px;
    height: 45px;
    color: white;
    font-size: 16px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 12px;
  background-color: white;
  width: 400px;
  height: 700px;
`;

export const H2 = styled.h2`
  border-radius: 12px 12px 0px 0px;
  padding: 20px 0px;
  background-color: #8e8efe;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 40px;
  font-weight: 700;
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 30px;
  background-color: #8e8efe;
  width: 60px;
  height: 60px;
  color: white;
  font-size: 40px;
  &:hover {
    cursor: pointer;
  }
`;
