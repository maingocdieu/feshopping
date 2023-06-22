import { useState } from "react";
import { api } from "../../api/axios";


interface FormValues {
    email?: string;
    userName?: string;
    password?: string,
    rolse?: Array<string>;
}

interface OtherProps {
    message:  string;
}

export const Register = () => {
  const [role, setRole] = useState<Array<string>>([]);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (!role.includes(e.target.value)) {
        role.push(e.target.value);
        setRole([...role])
      }
    } else {
        let value = e.target.value;
        if(role.includes(value)) {
            role.splice(role.indexOf(value), 1);
            setRole([...role]);
        }
    }
  };

  const handleRegister = async(e: any) => {
    e.preventDefault();
  const data = await api.signup({
        username: userName,
        password: password,
        name: "dieu",
        email: "dieu@gmail.com",
        roles: role
    });
    console.log(data);
  }
  return (
    <div className="w-[400px] mx-auto border-solid border-2 border-indigo-600">
      <form className="pl p-2">
        <div className="flex">
          <label htmlFor="username" className="mr-4">
            User name:
          </label>
          <input className="border" type="text" placeholder="user name" onChange={(e) => {
            setUserName(e.target.value);
          }} />
        </div>
        <div className="flex mt-4">
          <label htmlFor="username" className="mr-4">
            Email:
          </label>
          <input id="username" className="border" type="text" placeholder="email" onChange={(e) => {
            setUserName(e.target.value);
          }} />
        </div>
        <div className="flex mt-4">
          <label htmlFor="password" className="mr-4">
            Password:
          </label>
          <input className="border" type="password" name="password" placeholder="password" onChange={(e) => {
            setPassword(e.target.value);
          }} />
        </div>
        <div className="text-center mt-2">
          <button className="bg-gray-800 text-white p-2" onClick={handleRegister}>Register</button>
        </div>
        
        {/* <div>
          <label htmlFor="">Role</label>
          <input type="checkbox" value={"admin"} onChange={handleChange} />{" "}
          <label htmlFor="">Admin</label>
          <input type="checkbox" value={"user"} onChange={handleChange} />{" "}
          <label htmlFor="">User</label>
        </div>
        <div className="text-center mt-2">
          <button className="bg-gray-800 text-white p-2" onClick={handleRegister}>Register</button>
        </div>
        {role.map((element, index) => {
          return <h1 key={index}>{element}</h1>;
        })} */}
      </form>
    </div>
  );
};
