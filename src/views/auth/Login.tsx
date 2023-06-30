import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { api } from "../../api/axios";
import useAuth from "../../hooks/userAuth";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

const SigninShema = Yup.object().shape({
  userName: Yup.string().required("Required"),
  passWord: Yup.string().required("Required"),
});
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
      {/* <div className="w-[400px] mx-auto border-solid border-2 border-indigo-600">
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
      </div> */}

      <Formik
        initialValues={{
          userName: "",
          passWord: "",
        }}
        validationSchema={SigninShema}
        onSubmit={async (values) => {
          const a = await api
            .login({
              username: values.userName,
              password: values.passWord,
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
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form className="w-[400px] mx-auto">
              <div className="w-full text-center  ">Form Đăng nhập</div>
              <div>
                <label htmlFor="username" className="font-bold">
                  User name
                </label>
                <br />
                <Field
                  name="userName"
                  id="username"
                  className="border w-full pl-2 bg-gray-300 h-[35px] focus:outline-none"
                />
              </div>
              {errors.userName && touched.userName ? (
                <div className="text-red-600">{errors.userName}</div>
              ) : null}
              <label htmlFor="password" className="font-bold">
                Password:
              </label>
              <br />
              <Field
                name="passWord"
                id="password"
                className="border w-full pl-2 h-[35px] bg-gray-300 focus:outline-none"
                type="password "
              />
              <br />
              {errors.passWord && touched.passWord ? (
                <div className="text-red-600">{errors.passWord}</div>
              ) : null}
              <button type="submit" className="w-full mt-4 bg-sky-500 h-[35px]">
                Đăng nhập
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
