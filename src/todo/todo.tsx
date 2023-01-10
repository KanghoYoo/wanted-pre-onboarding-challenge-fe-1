import TodoList from "../components/TodoList";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Background, AddButton, H2, Main, Header } from "./TodoStyles";
import Modal from "../components/Modal";
import axios from "axios";
import {
  createTodos,
  deleteTodos,
  getTodos,
  updateTodos,
} from "../apis/TodoAPI";

interface TodosType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

function Todo() {
  const [todos, setTodos] = useState<TodosType[]>([]);
  const [isClickCreateModal, setIsClickCreateModal] = useState(false);
  const [isClickModifyModal, setIsClickModifyModal] = useState(false);
  const [isClickDetail, setIsClickDetail] = useState(false);
  const [selectId, setSelectId] = useState("");
  const navigate = useNavigate();

  const onClickLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃되었습니다.");
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  const onCreate = useCallback(
    (title: string, content: string, setTitle: any, setContent: any) => {
      title !== "" &&
        content !== "" &&
        createTodos(title, content)
          .then((response) => {
            setTodos(response.data.data);
            setTitle("");
            setContent("");
            setIsClickCreateModal(false);
          })
          .catch((err) => {
            console.log(err.response);
          });
    },
    []
  );

  const onModify = useCallback(
    (
      title: string,
      content: string,
      setTitle: any,
      setContent: any,
      id: string,
      setSelectId: any
    ) => {
      updateTodos(id, title, content)
        .then((response) => {
          setTodos(response.data.data);
          setTitle("");
          setContent("");
          setSelectId("");
          setIsClickModifyModal(false);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    []
  );

  const onRemove = useCallback((id: string) => {
    deleteTodos(id)
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

  useEffect(() => {
    getTodos()
      .then((response) => {
        setTodos(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <Background>
      {(isClickCreateModal || isClickModifyModal) && (
        <Modal
          setIsClickCreateModal={setIsClickCreateModal}
          setTodos={setTodos}
          todos={todos}
          onCreate={onCreate}
          setIsClickModifyModal={setIsClickModifyModal}
          onModify={onModify}
          isClickCreateModal={isClickCreateModal}
          isClickModifyModal={isClickModifyModal}
          selectId={selectId}
          setSelectId={setSelectId}
        ></Modal>
      )}
      <Header>
        <h1>TodoList</h1>
        <button onClick={onClickLogout}>로그아웃</button>
      </Header>
      <Main>
        <H2>TodoList</H2>
        <TodoList
          todos={todos}
          isClickDetail={isClickDetail}
          setIsClickDetail={setIsClickDetail}
          onRemove={onRemove}
          setIsClickModifyModal={setIsClickModifyModal}
          setSelectId={setSelectId}
        />
        <AddButton onClick={() => setIsClickCreateModal(true)}>+</AddButton>
      </Main>
    </Background>
  );
}

export default Todo;
