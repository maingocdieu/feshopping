
import { useState } from "react";
import { TreeNode } from "./TreeNode";
export interface DataObject {
  [key: string]: Node
}

export type Node = {
  path: string;
  type: "folder" | "file" | "input" | "root";
  isRoot?: boolean;
  children?: string[];
  content?: string;
  isOpen?: boolean;
}

const data: DataObject = {
  "/root": {
    path: "/root",
    type: "folder",
    isRoot: true,
    children: ["/root/david", "/root/jslancer"],
  },
  "/root/david": {
    path: "/root/david",
    type: "folder",
    children: ["/root/david/readme.md"],
  },
  "/root/david/readme.md": {
    path: "/root/david/readme.md",
    type: "file",
    content: "Thanks for reading me me. But there is nothing here.",
  },
  "/root/jslancer": {
    path: "/root/jslancer",
    type: "folder",
    children: ["/root/jslancer/projects", "/root/jslancer/vblogs"],
  },
  "/root/jslancer/projects": {
    path: "/root/jslancer/projects",
    type: "folder",
    children: ["/root/jslancer/projects/treeview"],
  },
  "/root/jslancer/projects/treeview": {
    path: "/root/jslancer/projects/treeview",
    type: "folder",
    children: [],
  },
  "/root/jslancer/vblogs": {
    path: "/root/jslancer/vblogs",
    type: "folder",
    children: [],
  },
};

export const Tree = () => {
  const [nodes, setNodes] = useState<DataObject>(data);
  const getRootNodes = () => {
    return Object.values(nodes).filter((node) => node.isRoot === true);
  };

  const getChildNodes = (node: Node): Array<Node> => {
    if (!node.children) return [];
    return node.children.map((path) => nodes[path]);
  };

  const onToggle = (node: Node): void => {
    nodes[node.path].isOpen = !node.isOpen;
    setNodes({...nodes} );
  }
  return (
    <>
      {getRootNodes().map((node) => (
        <TreeNode node={node} childNode ={getChildNodes} onToggle = {onToggle} nodes = {nodes} setNodes = {setNodes}></TreeNode>
      ))}
    </>
  );
};
