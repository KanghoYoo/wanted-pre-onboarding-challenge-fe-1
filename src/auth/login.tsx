import useInput from "../hooks/useInput";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Background, Button, Form, H1, Label, Main } from "./LoginStyles";
import { signIn } from "../apis/AuthAPI";

function Login() {
  const [userId, onChangeUserId] = useInput("");
  const [userPassword, onChangeUserPassword] = useInput("");
  const [errorText, setErrorText] = useState<string>("");

  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const EMAIL_REGEX =
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      // 영문, 숫자, 특수문자 혼합 8-20자리 이내 비밀번호
      const PASSWORDS_REGEX =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

      !EMAIL_REGEX.test(userId)
        ? setErrorText("이메일 형식으로 아이디를 입력해주세요.")
        : !PASSWORDS_REGEX.test(userPassword)
        ? setErrorText(
            "8자이상, 영문, 특수기호를 포함한 비밀번호를 입력해주세요."
          )
        : (function () {
            signIn(userId, userPassword)
              .then((response) => {
                const accessToken = response.data.token;
                accessToken && localStorage.setItem("token", accessToken);
                window.alert(response.data.message);
                navigate("/todo");
              })
              .catch((error) => {
                window.alert(error.response.data.details);
              });
          })();
    },
    [userId, userPassword]
  );

  useEffect(() => {
    localStorage.getItem("token") && navigate("/todo");
  }, []);

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
