import axios from "axios";
import React from "react";
import TodoListItem from "./TodoListItem";
import { DetailWrapper, Li, Ul } from "./TodoListStyles";

function TodoList({
  todos,
  onRemove,
  setIsClickModifyModal,
  setSelectId,
}: any) {
  return (
    <Ul>
      {todos &&
        todos.map((todoItem: any, index: any) => {
          return (
            <TodoListItem
              id={todoItem.id}
              key={index}
              todos={todos}
              todoItem={todoItem}
              onRemove={onRemove}
              setIsClickModifyModal={setIsClickModifyModal}
              setSelectId={setSelectId}
            />
          );
        })}
    </Ul>
  );
}

export default TodoList;
