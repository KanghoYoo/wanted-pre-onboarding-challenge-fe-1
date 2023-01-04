import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border: none;
  border-radius: 12px;
  width: 400px;
  height: 500px;
  & > div {
    font-size: 14px;
    & > a {
      margin-left: 5px;
      font-weight: 600;
    }
  }
`;

export const H1 = styled.h1`
  margin: 50px 0px;
  color: black;
  font-size: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  & > div {
    color: red;
    margin-bottom: 20px;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 350px;
  font-size: 18px;
  & > input {
    border: none;
    border-bottom: 1px solid #8e8efe;
    width: 230px;
    height: 30px;
    font-size: 18px;
  }
  & > input:focus {
    outline: none;
    border-bottom: 2px solid #7171fd;
  }
`;

export const Button = styled.button`
  background-color: #8e8efe;
  border: none;
  border-radius: 12px;
  width: 300px;
  height: 45px;
  font-size: 18px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
