import useInput from "../hooks/useInput";
import axios from "axios";
import React, { useCallback, useEffect } from "react";
import {
  ModalBackground,
  ButtonWrapper,
  LabelWrapper,
  ModalContainer,
} from "./ModalStyles";

const Modal = (props: any) => {
  const {
    setIsClickCreateModal,
    setTodos,
    todos,
    onCreate,
    setIsClickModifyModal,
    onModify,
    isClickCreateModal,
    isClickModifyModal,
    selectId,
    setSelectId,
  } = props;
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");

  const onClickModalClose = (e: any) => {
    e.stopPropagation();
    setTitle("");
    setContent("");
    isClickCreateModal && setIsClickCreateModal(false);
    isClickModifyModal && setIsClickModifyModal(false);
  };

  const onClickCreate = () => {
    onCreate(title, content, setTitle, setContent);
  };

  const onClickModify = () => {
    onModify(title, content, setTitle, setContent, selectId, setSelectId);
  };
  return (
    <>
      <ModalBackground onClick={onClickModalClose}></ModalBackground>
      <ModalContainer>
        <p>
          {(isClickCreateModal && "할일 추가") ||
            (isClickModifyModal && "할일 수정")}
        </p>
        <LabelWrapper>
          <label>
            제목:
            <input
              type="text"
              placeholder="제목"
              value={title}
              onChange={onChangeTitle}
            />
          </label>
          <label>
            내용:
            <input
              type="text"
              placeholder="내용"
              value={content}
              onChange={onChangeContent}
            />
          </label>
        </LabelWrapper>
        <ButtonWrapper>
          <button
            onClick={
              (isClickCreateModal && onClickCreate) ||
              (isClickModifyModal && onClickModify)
            }
          >
            {(isClickCreateModal && "추가") || (isClickModifyModal && "수정")}
          </button>
          <button onClick={onClickModalClose}>취소</button>
        </ButtonWrapper>
      </ModalContainer>
    </>
  );
};

export default Modal;
