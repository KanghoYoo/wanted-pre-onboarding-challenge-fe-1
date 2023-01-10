import axios from "axios";

const URI = "http://localhost:8080";

export const getTodos = () =>
  axios.get(`${URI}/todos`, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });

export const createTodos = (title: string, content: string) =>
  axios
    .post(
      `${URI}/todos`,
      { title: title, content: content },
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    )
    .then(() => getTodos());

export const updateTodos = (id: string, title: string, content: string) =>
  axios
    .put(
      `${URI}/todos/${id}`,
      {
        title: title,
        content: content,
      },
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    )
    .then(() => getTodos());

export const deleteTodos = (id: string) =>
  axios
    .delete(`${URI}/todos/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
    .then(() => getTodos());
