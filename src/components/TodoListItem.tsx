import axios from "axios";
import React, { useState } from "react";
import { DetailWrapper, Li } from "./TodoListStyles";

function TodoListItem({
  id,
  todos,
  todoItem,
  onRemove,
  setIsClickModifyModal,
  setSelectId,
}: any) {
  const [isClickDetail, setIsClickDetail] = useState(false);

  const onClickCloseDetail = () => {
    isClickDetail ? setIsClickDetail(false) : setIsClickDetail(true);
  };

  const onClickRemoveButton = (id: string) => {
    onRemove(id);
  };

  const onClickModifyButton = () => {
    setSelectId(id);
    setIsClickModifyModal(true);
  };
  return (
    <>
      <Li id={id}>
        <div>
          <input type="checkbox" id="title"></input>
          <label htmlFor="title">{todoItem.title}</label>
        </div>
        <div>
          <button onClick={onClickCloseDetail}>상세보기</button>
          <button onClick={onClickModifyButton}>수정</button>
          <button
            onClick={() => {
              onClickRemoveButton(id);
            }}
          >
            삭제
          </button>
        </div>
      </Li>
      {isClickDetail && (
        <DetailWrapper>
          <span>내용: {todoItem.content}</span>
          <span>생성 날짜: {todoItem.createdAt}</span>
          <span>업데이트 날짜: {todoItem.updatedAt}</span>
        </DetailWrapper>
      )}
    </>
  );
}

export default TodoListItem;
