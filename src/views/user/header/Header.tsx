import { Link, NavLink, useLocation } from "react-router-dom";
import { BsChatRightText } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import useAuth from "../../../hooks/userAuth";
import { useEffect, useState } from "react";

export const MenuItems = [
  {
    title: "Thương hiệu",
    path: "/user/insert",
    cName: "dropdown-link",
    subMenu: ["Áo", "Quần"],
  },
  {
    title: "Đồng hồ",
    path: "/dong-ho",
    cName: "dropdown-link",
    subMenu: ["Da banh", "Da bong"],
  },
  {
    title: "Túi xách",
    path: "/tui-xach",
    cName: "dropdown-link",
    subMenu: ["Áo", "Quần"],
  },
  {
    title: "Nước hoa",
    path: "/nuoc-hoa",
    cName: "dropdown-link",
  },
  {
    title: "Mỹ phẩm",
    path: "/my-pham",
    cName: "dropdown-link",
  },
  {
    title: "Giày",
    path: "/giay",
    cName: "dropdown-link",
  },
  {
    title: "Thời trang",
    path: "/thoi-trang",
    cName: "dropdown-link",
  },
  {
    title: "Mũ nón",
    path: "/mu-non",
    cName: "dropdown-link",
  },

  {
    title: "Kính mắt",
    path: "/kinh-mat",
    cName: "dropdown-link",
  },
  {
    title: "Son môi",
    path: "/mon-moi",
    cName: "dropdown-link",
  },
  {
    title: "Trang sức",
    path: "/trang-suc",
    cName: "dropdown-link",
  },
  {
    title: "Trang điểm",
    path: "/trang-diem",
    cName: "dropdown-link",
  },
];

const Header = () => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const [showNav, setShowNav] = useState<boolean>(false);
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
  useEffect(() => {
    if(location.pathname === "/tui-xach") {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [location.pathname]);
  return (
    <>
      <div className="border-b-2 pb-4">
        {showNav && <h1>Dieu sau doi</h1>}
        <div className="bg-blue-900 h-[40px]">
          <div className="flex justify-between text-white w-[90%] mx-auto leading-[40px]">
            <div className="flex ml-[-10px]">
              <Link to="/user/new" className="ml-[10px] hover:cursor-pointer">
                Tin tức
              </Link>
              <span className="ml-[10px] hover:cursor-pointer">
                Kên người bán
              </span>
              <span className="ml-[10px] hover:cursor-pointer">
                Hàng hiệu giảm 50%
              </span>
            </div>
            <div className="flex">
              <div className="relative group hover:bg-gray-50 hover:text-black">
                <span className=" hover:cursor-pointer hover:bg-gray-50  block hover:text-black ">
                  Tài khoản
                </span>
                <ul className="absolute w-[200px] bg-gray-50 text-black hidden group-hover:block pl-[15px]  group-hover:z-10">
                  {!auth.user && (
                    <>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link to="/login">Đăng nhập</Link>
                      </li>

                      <li className="hover:cursor-pointer hover:underline">
                        <Link to="/register">Đăng kí</Link>
                      </li>
                    </>
                  )}
                  <li className="hover:cursor-pointer hover:underline">
                    <Link to="/register">Đằng xuất</Link>
                  </li>
                </ul>
              </div>
              <span className="ml-[10px] hover:cursor-pointer">Giỏ hàng</span>
              {auth.user && (
                <div className="rounded-full w-[40px] h-[40px] bg-gray-300 text-center ">
                  <span className="ml-[10px] hover:cursor-pointer ">
                    {auth.user}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mx-auto w-[90%] flex justify-between h-[110px] items-center">
          <div className="flex">
            <BsChatRightText
              style={{ fontSize: "50px" }}
              className="bg-gray-50"
            />
            <ul className="ml-[10px]">
              <li>Hotline: 093.934.8888</li>
              <li>Tổng đài: 1900 232322</li>
            </ul>
          </div>
          <div>
            <img
              src="https://vuahanghieu.com/assets/images/logo.svg?v=13072022"
              alt=""
              className="h-[80px]"
            />
          </div>
          <div className="relative">
            <div className="absolute right-0">
              <CiSearch style={{ fontSize: "20px" }} />
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm trên vua hàng hiệu "
              className="border-b-2 w-[340px] outline-none pr-5 pb-[5px]"
            />
          </div>
        </div>
        <ul className="flex uppercase font-bold text-black mx-auto w-[90%] justify-between h-[50px] leading-[50px]">
          {MenuItems.map((menu, index) => {
            return (
              <div className=" group">
                <NavLink
                  key={index}
                  to={menu.path}
                  style={({ isActive }) => isActive ? activeStyles : null}
                >
                  {menu.title}
                </NavLink>
                <div className="absolute hidden group-hover:block left-0 right-0 bg-stone-300 top-5px">
                  <div className="flex justify-around">
                    {menu.subMenu?.map((menu) => {
                      return (
                        <div className="">
                          <h1>{menu}</h1>
                          <h1>{menu}</h1>
                          <h1>UUU</h1>
                          <h1>UUU</h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Header;
