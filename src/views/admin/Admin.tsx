import { faAngleUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Item } from "./Item";
import { Tree } from "./Tree";
import { CategoryManagement } from "./CategoryManagement";
const data = {
  category: [
    {
      name: "Đồng hồ",
      child: [
        {
          name: "Màu sắc",
          child: ["red"],
        },
        {
          name: "Nơi sản xuất",
          child: ["Sai gon"],
        },
      ],
    },

    {
      name: "Mỹ phẩm",
      child: [
        {
          name: "Kích thước",
          child: ["red"],
        },
        {
          name: "Nơi sản xuất",
          child: ["Sai gon"],
        },
        {
          name: "Thương hiệu",
          child: ["Sai gon"],
        },
      ],
    },
  ],
};

const Admin = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      {/* <Tree></Tree> */}
      <CategoryManagement></CategoryManagement>
    </>
    // <section>
    //   <h1>cateGory managment</h1>
    //   <h1>Category</h1>
    //   <button className="border bg-gray-500 text-white">Add category</button>
    //   <div className="">
    //     {data.category.map((test, index) => {
    //       return (
    //         <Item
    //           test={test}
    //           key={index}
    //           isActiveSection={index === activeIndex}
    //           setActiveIndex={setActiveIndex}
    //           sectionIndex={index}
    //         ></Item>
    //       );
    //     })}

    //   </div>
    // </section>
  );
};

export default Admin;
