import React, { useState } from "react";
import data from "./oneroom.js";

function House() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h1 style={{ textAlign: "center", backgroundColor: "#800080", color: "white", padding: "10px", fontSize: "20px" }}>처음처럼 가격🔼🔽 물건명🔼🔽</h1>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            margin: "20px auto",
            maxWidth: "600px",
            backgroundColor: "#f9f9f9",
            padding: "10px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            cursor: "pointer"
          }}
          onClick={() => handleClick(item)}
        >
          <h2 style={{ margin: "0", fontSize: "1.2em", color: "#555" }}>{item.title}</h2>
          <p style={{ margin: "5px 0", color: "#666" }}>{item.content}</p>
          <p style={{ margin: "5px 0", fontWeight: "bold", color: "#444" }}>
            가격: {item.price.toLocaleString()}원
          </p>
          <img
            src={item.image}
            alt={item.title}
            style={{ maxWidth: "100%", height: "auto", display: "block", margin: "10px 0" }}
          />
        </div>
      ))}
      {selectedItem && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            border: "1px solid #ccc",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
            maxWidth: "400px",
            textAlign: "center"
          }}
        >
          <h2>{selectedItem.title}</h2>
          <img
            src={selectedItem.image}
            alt={selectedItem.title}
            style={{ maxWidth: "100%", height: "auto", margin: "10px 0" }}
          />
          <p>{selectedItem.content}</p>
          <p style={{ fontWeight: "bold" }}>가격: {selectedItem.price.toLocaleString()}원</p>
          <button onClick={closeModal} style={{ marginTop: "10px", padding: "5px 10px" }}>
            닫기
          </button>
        </div>
      )}
      {selectedItem && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999
          }}
          onClick={closeModal}
        />
      )}
    </div>
  );
}

export default House;