import { Outlet, useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Logout
      </button>

      <button
        onClick={() => {
          navigate("/user/insert");
        }}
      >
        insert
      </button>

    </>
  );
};

export default User;
