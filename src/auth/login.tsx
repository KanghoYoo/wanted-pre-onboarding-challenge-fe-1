import useInput from "../hooks/useInput";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Background, Button, Form, H1, Label, Main } from "./LoginStyles";

function Login() {
  const [userId, onChangeUserId] = useInput("");
  const [userPassword, onChangeUserPassword] = useInput("");
  const [errorText, setErrorText] = useState("");

  const navigate = useNavigate();

  const EMAIL_REGEX =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // 영문, 숫자, 특수문자 혼합 8-20자리 이내 비밀번호
  const PASSWORDS_REGEX =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      console.log(userId);
      !EMAIL_REGEX.test(userId)
        ? setErrorText("이메일 형식으로 아이디를 입력해주세요.")
        : !PASSWORDS_REGEX.test(userPassword)
        ? setErrorText(
            "8자이상, 영문, 특수기호를 포함한 비밀번호를 입력해주세요."
          )
        : (function () {
            axios
              .post(`http://localhost:8080/users/login`, {
                email: userId,
                password: userPassword,
              })
              .then((response) => {
                window.alert(response.data.message);
                navigate("/todo");
              })
              .catch((error) => {
                window.alert(error.response.data.details);
              });
          })();
    },
    [userId, userPassword, setErrorText, EMAIL_REGEX, PASSWORDS_REGEX]
  );

  return (
    <Background>
      <Main>
        <H1>로그인</H1>
        <Form onSubmit={onSubmit}>
          <Label htmlFor="userId">
            아이디
            <input
              id="userId"
              type="user"
              value={userId}
              onChange={onChangeUserId}
              placeholder="이메일"
            ></input>
          </Label>
          <Label htmlFor="userPassword">
            비빌번호
            <input
              id="userPassword"
              type="password"
              value={userPassword}
              onChange={onChangeUserPassword}
              placeholder="비밀번호"
            ></input>
          </Label>
          <div>
            <strong>{errorText}</strong>
          </div>
          <Button type="submit">로그인</Button>
        </Form>
        <div>
          아직 아이디가 없으신가요?
          <Link to="/signup">회원가입 하러가기</Link>
        </div>
      </Main>
    </Background>
  );
}

export default Login;
