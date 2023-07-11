import { useEffect, useRef, useState } from "react";
import { DataObject, Node } from "./Tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faFolder } from "@fortawesome/free-solid-svg-icons";

type TreeNodeProps = {
  node: Node;
  childNode: (node: Node) => Array<Node>;
  level?: number;
  onToggle: (node: Node) => void;
  nodes: DataObject;
  setNodes: (nodes: DataObject) => void;
};

const getLable = (path: string): string => {
  const a: string[] = path.split("/");
  return a[a.length - 1];
};
export const TreeNode = ({
  node,
  childNode,
  level = 0,
  onToggle,
  nodes,
  setNodes,
}: TreeNodeProps) => {
  return (
    <>
      <div
        style={{
          marginLeft: level * 15 + "px",
        }}
        className="flex justify-between w-[200px"
        onClick={() => {
          onToggle(node);
        }}
      >
        {node.type !== "input" ? (
          <div>
            <FontAwesomeIcon className="text-yellow-300" icon={faFolder} />
            {<span> {getLable(node?.path)}</span>}
          </div>
        ) : (
          <div>
            <input placeholder="Nhap thuong hieu"></input>
          </div>
        )}
        <div
          className="hidden group-hover:block group-hover:bg-red-600"
          onClick={() => {
            node.children?.push(node.path + "/dieu");
            nodes[node.path + "/dieu"] = {
              path: node.path + "/dieu",
              type: "input",
              isOpen: true,
            };
            setNodes({...nodes});
          }}
        >
          <button>Add</button>
        </div>
      </div>
      {node.isOpen &&
        childNode(node).map((child, index) => {
          return (
            <TreeNode
              node={child}
              childNode={childNode}
              key={index}
              level={level + 1}
              onToggle={onToggle}
              nodes={nodes}
              setNodes={setNodes}
            />
          );
        })}
    </>
  );
};
