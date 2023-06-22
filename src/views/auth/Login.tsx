import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { api } from "../../api/axios";
import useAuth from "../../hooks/userAuth";

export const Login = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUserNameChange = (event: any) => {
    setUsername(event?.target.value);
  };
  const handlePasswordChange = (event: any) => {
    setPassword(event?.target.value);
  };

  async function handleLogin() {
    console.log(username, password);
    const a = await api
      .login({
        username: username,
        password: password,
      })
      .catch((eror) => {
        console.log(eror.response.status);
      });
    setAuth({
      user: a?.name,
      roles: a?.roles,
    });
    if (a?.roles[0].authority === "ADMIN") {
      navigate("/admin", {
        replace: true,
      });
    } else {
      navigate("/", {
        replace: true,
      });
    }

    localStorage.setItem("items", JSON.stringify(a));
  }
  return (
    <>
      <div className="w-[400px] mx-auto border-solid border-2 border-indigo-600">
        <h1 className="text-center">Đăng nhập vào tài khoản</h1>
        <form className="mt-[15px] p-6">
          <div>
            <label htmlFor="username">User name: </label>
            <input
              className="border"
              type="text"
              id="username"
              onChange={handleUserNameChange}
              value={username}
            />
          </div>
          <div className="mt-[5px]">
            <label htmlFor="password">Password: </label>
            <input
              className="border"
              type="password"
              id="password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div className="text-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
