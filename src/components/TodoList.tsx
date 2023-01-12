import React from "react";
import { TodoListProps, TodosType } from "src/todo/TodoInterface";
import TodoListItem from "./TodoListItem";

function TodoList(props: TodoListProps): JSX.Element {
  const { todos, onRemove, setIsClickModifyModal, setSelectId } = props;

  return (
    <>
      {todos &&
        todos.map((todoItem: TodosType, index: number): JSX.Element => {
          return (
            <TodoListItem
              id={todoItem.id}
              key={index}
              todoItem={todoItem}
              onRemove={onRemove}
              setIsClickModifyModal={setIsClickModifyModal}
              setSelectId={setSelectId}
            />
          );
        })}
    </>
  );
}

export default TodoList;
