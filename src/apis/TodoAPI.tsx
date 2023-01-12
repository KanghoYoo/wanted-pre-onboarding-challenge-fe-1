import axios from "axios";

const URI = "http://localhost:8080";
const GET_TOKEN = `${localStorage.getItem("token")}`;

export const getTodos = () =>
  axios.get(`${URI}/todos`, {
    headers: {
      Authorization: GET_TOKEN,
    },
  });

export const createTodos = (title: string, content: string) =>
  axios
    .post(
      `${URI}/todos`,
      { title, content },
      {
        headers: {
          Authorization: GET_TOKEN,
        },
      }
    )
    .then(() => getTodos());

export const updateTodos = (id: string, title: string, content: string) =>
  axios
    .put(
      `${URI}/todos/${id}`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: GET_TOKEN,
        },
      }
    )
    .then(() => getTodos());

export const deleteTodos = (id: string) =>
  axios
    .delete(`${URI}/todos/${id}`, {
      headers: {
        Authorization: GET_TOKEN,
      },
    })
    .then(() => getTodos());
