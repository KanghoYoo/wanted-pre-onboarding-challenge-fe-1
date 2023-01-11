import React, { useState } from "react";
import { TodoListItemType } from "src/todo/TodoInterface";
import { DetailWrapper, Li } from "./TodoListStyles";

function TodoListItem(props: TodoListItemType): JSX.Element {
  const { id, todoItem, onRemove, setIsClickModifyModal, setSelectId } = props;
  const [isClickDetail, setIsClickDetail] = useState<boolean>(false);

  const onClickCloseDetail = (): void => {
    isClickDetail ? setIsClickDetail(false) : setIsClickDetail(true);
  };

  const onClickRemoveButton = (id: string): void => {
    onRemove(id);
    setIsClickDetail(false);
  };

  const onClickModifyButton = (): void => {
    setSelectId(id);
    setIsClickModifyModal(true);
  };
  return (
    <>
      <Li id={id}>
        <div>
          <input type="checkbox" id={`title${id}`}></input>
          <label htmlFor={`title${id}`}>{todoItem.title}</label>
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
