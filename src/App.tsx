import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./hooks/userAuth";

import "./index.css";
import { Login } from "./views/auth/Login";
import Header from "./views/user/header/Header";
import { Register } from "./views/auth/Register";
import RequireAuth from "./views/RequireAuth";
import User from "./views/user/User";
import Insert from "./views/user/insert/Insert";
import Admin from "./views/admin/Admin";
import Product from "./views/user/product/Product";

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
    if (location.pathname.startsWith("/login")) {
      if (auth?.roles[0]?.authority === "USER") {
        navigate("/", { replace: true });
      } else if (auth?.roles[0]?.authority === "ADMIN") {
        navigate("/admin", {
          replace: true,
        });
      } else {
        navigate("/login", {
          replace: true,
        });
      }
    }
  }, [location.pathname]);


  return (
    <>
      <Header></Header>
      <div className="w-[90vw] mx-auto">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<User />} />
            <Route path="/user/insert" element={<Insert />} />
            <Route path="/tui-xach" element={<Product />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
