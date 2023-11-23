import React from "react";
import axios from "axios"; // Assuming you want to make HTTP requests

export default function Tasks() {
  
  const handleGet = () => {
    fetch("http://localhost:3000/pages/api/toDoList")
      .then(response => response.json())
      .then(data => {
        console.log("GET response:", data);
      })
      .catch(error => {
        console.error("Error making GET request:", error);
      });
  };
  

  const handlePost = () => {
    alert("POST request");
    // Add your actual POST request logic here using axios or another library
  }

  const handleDelete = () => {
    alert("DELETE request");
    // Add your actual DELETE request logic here using axios or another library
  }

  return (
    <div>
      <button onClick={handleGet}>GET</button>
      <br/>
      <button onClick={handlePost}>POST</button>
      <br/>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}
