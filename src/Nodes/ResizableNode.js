import React from "react";
import { Handle, NodeResizer } from "reactflow";

const ResizableNode = ({ data, selected }) => {
  return (
    <div>
      <Handle type="target" position="left" style={{ background: "#555" }} />
      <Handle type="source" position="right" style={{ background: "#555" }} />
      <NodeResizer minWidth={100} minHeight={50} isVisible={selected}>
        {data.label}
      </NodeResizer>
    </div>
  );
};

export default ResizableNode;
