import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Background, Button, Form, H1, Label, Main } from "./SignUpStyles";
import useInput from "../hooks/useInput";
import { signUp } from "../apis/AuthAPI";

function SignUp() {
  const [userId, onChangeUserId] = useInput("");
  const [userPassword, , setUserPassword] = useInput("");
  const [userPasswordConfirm, , setUserPasswordConfirm] = useInput("");
  const [mismatchError, setMismatchError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  const navigate = useNavigate();

  const onChangeUserPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserPassword(e.target.value);
      setMismatchError(e.target.value !== userPasswordConfirm);
    },
    [setUserPassword, userPasswordConfirm]
  );

  const onChangeUserPasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserPasswordConfirm(e.target.value);
      setMismatchError(e.target.value !== userPassword);
    },
    [setUserPasswordConfirm, userPassword]
  );

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
        : mismatchError
        ? setErrorText("비밀번호가 일치하지 않습니다.")
        : (function () {
            signUp(userId, userPassword)
              .then((response) => {
                window.alert(response.data.message);
                navigate("/login");
              })
              .catch((error) => {
                console.log(error.response.data);
              });
          })();
    },
    [userId, userPassword, mismatchError, navigate]
  );

  useEffect(() => {
    localStorage.getItem("token") && navigate("/todo");
  }, [navigate]);

  return (
    <Background>
      <Main>
        <H1>회원가입</H1>
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
          <Label htmlFor="userPasswordConfirm">
            비밀번호 확인
            <input
              id="userPasswordConfirm"
              type="password"
              value={userPasswordConfirm}
              onChange={onChangeUserPasswordConfirm}
              placeholder="비밀번호 확인"
            ></input>
          </Label>
          <div>
            <strong>{errorText}</strong>
          </div>
          <Button type="submit">회원가입</Button>
        </Form>
        <div>
          이미 가입된 유저이신가요?
          <Link to="/login">로그인 하러가기</Link>
        </div>
      </Main>
    </Background>
  );
}

export default SignUp;
