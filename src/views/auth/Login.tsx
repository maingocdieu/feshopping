import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { api } from "../../api/axios";
import useAuth from "../../hooks/userAuth";

export const Login = () => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (event : any) => {
      setUsername(event?.target.value)
    }
    const handlePasswordChange = (event : any) => {
      setPassword(event?.target.value)
    }

  return (
    <>
    <form >
      <div>
        <label htmlFor="username"  >User name</label>
        <input type="text" id= "username" onChange={handleUserNameChange} value = {username} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id= "password" onChange={handlePasswordChange} value = {password} />
      </div>
    </form>
      <button onClick={ async () => {
        console.log('click')
        const a = await  api.login({
            "username": username,
            "password": password
        }).catch((eror) => {
            console.log(eror.response.status)
        })
        setAuth({
            user: a?.name,
            roles: a?.roles
        })
        if(a?.roles[0].authority === "ADMIN"){
          navigate("/")
        }
        else {
          navigate("/")
        }

        localStorage.setItem('items', JSON.stringify(a));
      }}>Login</button>
    </>
  );
};
