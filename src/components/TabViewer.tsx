
import React from "react";

interface TabViewerProps {
  tablature: string;
}

const TabViewer = ({ tablature }: TabViewerProps) => {
  // Convert the tablature string to lines for display
  const tabLines = tablature.split("\n");
  
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow p-4 mt-4">
      <pre className="font-mono text-guitar-800 whitespace-pre overflow-x-auto">
        {tabLines.map((line, index) => (
          <div key={index} className="leading-tight">
            {line}
          </div>
        ))}
      </pre>
    </div>
  );
};

export default TabViewer;
