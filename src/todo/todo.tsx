import TodoList from "../components/TodoList";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Background, AddButton, H2, Main, Header, Ul } from "./TodoStyles";
import Modal from "../components/Modal";
import {
  createTodos,
  deleteTodos,
  getTodos,
  updateTodos,
} from "../apis/TodoAPI";
import { TodosType } from "./TodoInterface";

function Todo() {
  const [todos, setTodos] = useState<TodosType[]>([]);
  const [isClickCreateModal, setIsClickCreateModal] = useState<boolean>(false);
  const [isClickModifyModal, setIsClickModifyModal] = useState<boolean>(false);
  const [selectId, setSelectId] = useState<string>("");
  const navigate = useNavigate();

  const onClickLogout = (): void => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃되었습니다.");
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  const onCreate = useCallback((title: string, content: string): void => {
    title !== "" &&
      content !== "" &&
      createTodos(title, content)
        .then((response) => {
          setTodos(response.data.data);
          setIsClickCreateModal(false);
        })
        .catch((err) => {
          console.log(err.response);
        });
  }, []);

  const onModify = useCallback(
    (title: string, content: string, id: string): void => {
      updateTodos(id, title, content)
        .then((response) => {
          setTodos(response.data.data);
          setSelectId("");
          setIsClickModifyModal(false);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    []
  );

  const onRemove = useCallback((id: string): void => {
    deleteTodos(id)
      .then((response) => {
        setTodos(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  useEffect((): void => {
    getTodos()
      .then((response) => {
        setTodos(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  if (localStorage.getItem("token") === null) {
    navigate("/login");
  }

  return (
    <Background>
      {(isClickCreateModal || isClickModifyModal) && (
        <Modal
          setIsClickCreateModal={setIsClickCreateModal}
          onCreate={onCreate}
          setIsClickModifyModal={setIsClickModifyModal}
          onModify={onModify}
          isClickCreateModal={isClickCreateModal}
          isClickModifyModal={isClickModifyModal}
          selectId={selectId}
        ></Modal>
      )}
      <Header>
        <h1>TodoList</h1>
        <button onClick={onClickLogout}>로그아웃</button>
      </Header>
      <Main>
        <H2>TodoList</H2>
        <Ul>
          <TodoList
            todos={todos}
            onRemove={onRemove}
            setIsClickModifyModal={setIsClickModifyModal}
            setSelectId={setSelectId}
          />
        </Ul>
        <AddButton onClick={() => setIsClickCreateModal(true)}>+</AddButton>
      </Main>
    </Background>
  );
}

export default Todo;
