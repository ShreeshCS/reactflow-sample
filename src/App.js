import React from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  NodeResizer,
} from "reactflow";
import { useCallback } from "react";
import "reactflow/dist/style.css";
import ResizableNode from "./Nodes/ResizableNode";

const initialNodes = [
  {
    id: "1",
    type: "ResizableNode",
    position: { x: 0, y: 0 },
    data: { label: "1" },
  },
  {
    id: "2",
    type: "ResizableNode",
    position: { x: 100, y: 200 },
    data: { label: "2" },
  },
];
const initialEdges = [];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />;
        <MiniMap />
        <Background color="#888" gap={16} />
        <NodeResizer />
      </ReactFlow>
    </div>
  );
}
