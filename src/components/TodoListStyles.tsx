import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 5px;
  border-bottom: 1px solid grey;
  font-size: 18px;
  & input:checked + label {
    text-decoration: line-through;
    color: gray;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  padding: 10px;
  background-color: #f5f5f5;
  font-size: 14px;
  & > span {
    margin: 5px 0px;
  }
`;
