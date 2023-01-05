import styled from "styled-components";

export const ModalBackground = styled.div`
  position: absolute;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #0000004e;
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  width: 500px;
  height: 200px;
  background-color: #ffffff;
  & > p {
    border-radius: 12px 12px 0px 0px;
    padding: 10px 0px;
    width: 100%;
    background-color: #8e8efe;
    color: white;
    font-size: 28px;
    text-align: center;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & > label {
    margin-bottom: 10px;
    & > input {
      margin-left: 5px;
      border: none;
      border-bottom: 1px solid #8e8efe;
      width: 430px;
      height: 30px;
      background: none;
      font-size: 16px;
      &:focus {
        outline: none;
        border-bottom: 2px solid #7c7cfd;
      }
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > button {
    margin: 2px 5px;
    border: none;
    border-radius: 8px;
    width: 80px;
    height: 30px;
    background-color: #8e8efe;
    color: white;
    font-size: 14px;
    cursor: pointer;
  }
`;
