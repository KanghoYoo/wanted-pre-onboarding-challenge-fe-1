import axios from "axios";

const URI = "http://localhost:8080";

export const signIn = (email: string, password: string) =>
  axios.post(`${URI}/users/login`, {
    email,
    password,
  });

export const signUp = (email: string, password: string) =>
  axios.post(`${URI}/users/create`, {
    email,
    password,
  });
