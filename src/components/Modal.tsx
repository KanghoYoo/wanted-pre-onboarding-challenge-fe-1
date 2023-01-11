import { ModalProps } from "src/todo/TodoInterface";
import useInput from "../hooks/useInput";
import {
  ModalBackground,
  ButtonWrapper,
  LabelWrapper,
  ModalContainer,
} from "./ModalStyles";

const Modal = (props: ModalProps): JSX.Element => {
  const {
    setIsClickCreateModal,
    onCreate,
    setIsClickModifyModal,
    onModify,
    isClickCreateModal,
    isClickModifyModal,
    selectId,
  } = props;
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");

  const onClickModalClose = (e: any): void => {
    e.stopPropagation();
    setTitle("");
    setContent("");
    isClickCreateModal && setIsClickCreateModal(false);
    isClickModifyModal && setIsClickModifyModal(false);
  };

  const onClickButton = (): void => {
    (isClickCreateModal && onClickCreate()) ||
      (isClickModifyModal && onClickModify());
  };

  const onClickCreate = (): void => {
    onCreate(title, content);
    setTitle("");
    setContent("");
  };

  const onClickModify = (): void => {
    onModify(title, content, selectId);
    setTitle("");
    setContent("");
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
          <button onClick={onClickButton}>
            {(isClickCreateModal && "추가") || (isClickModifyModal && "수정")}
          </button>
          <button onClick={onClickModalClose}>취소</button>
        </ButtonWrapper>
      </ModalContainer>
    </>
  );
};

export default Modal;
