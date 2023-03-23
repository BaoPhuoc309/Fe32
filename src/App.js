import React from "react";
import Hello from "./componends/Hello";
import HelloClassComponent from "./componends/HelloClasscCompornent";

const dataList = [
  {
    name: "Phuoc",
    gender: "male",
  },
  {
    name: "Bao",
    gender: "male",
  },
];

function App() {
  const renderContent = (data) => {
    return data.map((dataItem, index) => {
      return (
        <Hello key={index} content={dataItem.name} gender={dataItem.gender}>
          <span style={{ color: "red", fontWeight: 700 }}>Xin Chào</span>
        </Hello>
      );
    });
  };
  return (
    <>
      {renderContent(dataList)}
    </>
  );
}

export default App;
