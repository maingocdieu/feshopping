import {
  faArrowLeft,
  faArrowUp,
  faCloudUploadAlt,
  faFolder,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface DataObject {
  [key: string]: Node;
}

type Node = {
  path: string;
  type: "folder" | "file" | "input" | "root";
  isRoot?: boolean;
  children?: string[];
  content?: string;
  isOpen?: boolean;
  name: string;
};

const data: DataObject = {
  "/my-pham": {
    path: "/my-pham",
    name: "mỹ phẩm",
    type: "root",
    isRoot: true,
    children: ["/my-pham/david", "/my-pham/jslancer"],
  },

  "/my-pham/david": {
    path: "/my-pham/david",
    type: "folder",
    isRoot: false,
    children: [],
    name: "david",
  },

  "/my-pham/jslancer": {
    path: "/my-pham/jslancer",
    type: "folder",
    isRoot: false,
    children: [],
    name: "jslancer",
  },
  "/nuoc-hoa": {
    path: "/nuoc-hoa",
    type: "root",
    isRoot: true,
    children: ["/nuoc-hoa/lukaku", "/nuoc-hoa/messi"],
    name: "nước hoa",
  },

  "/nuoc-hoa/lukaku": {
    path: "/nuoc-hoa/lukaku",
    type: "folder",
    isRoot: false,
    children: [],
    name: "lukaku",
  },

  "/nuoc-hoa/messi": {
    path: "/nuoc-hoa/messi",
    type: "folder",
    isRoot: false,
    children: [],
    name: "messi",
  },
};
export const CategoryManagement = () => {
  const [nodes, setNodes] = useState<Array<Node>>([]);
  useEffect(() => {
    let listNode = Object.values(data).filter((node) => node.isRoot === true);
    setNodes(listNode);
  }, []);

  return (
    <>
      <div className="w-[80%] h-[700px] border-2 border-gray-400 mx-auto mt-5">
        <nav className="border-b-2 border-gray-400">
          <ul className="flex gap-4 ml-2">
            <li className="flex gap-2 items-center">
              <FontAwesomeIcon className="text-gray-500" icon={faArrowLeft} />
              <span>Back</span>
            </li>

            <li className="flex gap-2 items-center">
              <FontAwesomeIcon className="text-gray-500" icon={faFolder} />
              <span>New forder</span>
            </li>

            <li className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faCloudUploadAlt} />
              <span>Upload</span>
            </li>
            <li className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faSort} />
              <span>Sort by</span>
            </li>
            <li className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faArrowUp} />
              <span>Refresh</span>
            </li>
          </ul>
        </nav>
        <div>
          <div className="border-b-2 border-gray-400 pl-2">Category</div>
        </div>
        <div className="mt-5  w-[95%] mx-auto">
          <div className="flex gap-6">
            {nodes.map((node) => (
              <div
                className="flex flex-col"
                onClick={() => {
                  if (node.children?.length == 0) return;
                  let listChildNode = node.children?.map((child) => {
                    return data[child];
                  });
                  if (listChildNode) {
                    setNodes(listChildNode);
                  }
                }}
              >
                <FontAwesomeIcon
                  className="text-gray-500 text-[49px]"
                  icon={faFolder}
                />
                <span>{node.name}</span>
              </div>
            ))}

            {/* <div className="flex flex-col">
              <FontAwesomeIcon
                className="text-gray-500 text-[49px]"
                icon={faFolder}
              />
              <span>Nước hoa</span>
            </div>
            <div className="flex flex-col">
              <FontAwesomeIcon
                className="text-gray-500 text-[49px]"
                icon={faFolder}
              />
              <span>Mũ</span>
            </div>

            <div className="flex flex-col">
              <FontAwesomeIcon
                className="text-gray-500 text-[49px]"
                icon={faFolder}
              />
              <span>Túi xách</span>
            </div>

            <div className="flex flex-col">
              <FontAwesomeIcon
                className="text-gray-500 text-[49px]"
                icon={faFolder}
              />
              <span>Son môi</span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
