import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./hooks/userAuth";
import Admin from "./views/admin/Admin";

import { Login } from "./views/auth/Login";
import Layout from "./views/Layout";
import RequireAuth from "./views/RequireAuth";
import Insert from "./views/user/insert/Insert";
import User from "./views/user/User";

const ROLES = {
  User: "USER",
  Editor: 1984,
  Admin: "ADMIN",
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth, setAuth } = useAuth();
  useEffect(() => {
      if (location.pathname === "/") {
        if (auth?.roles[0]?.authority === "USER") {
          navigate("/user");
        }

        if (auth?.roles[0]?.authority === "ADMIN") {
          navigate("/admin", {
            replace: true,
          });
        }
      } else {
        navigate(location.pathname);
      }

  }, [auth]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
        <Route path="/user" element={<User />} />
        <Route path="/user/insert" element={<Insert />} />
      </Route>
      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
