import React from "react";
import { useNavigate } from "react-router";

function Todo() {
  const navigate = useNavigate();
  const onClickLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <button onClick={onClickLogout}>로그아웃</button>
    </div>
  );
}

export default Todo;
