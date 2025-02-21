import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const NextPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="sarcastic-text">Oh, I know you liked this! 😂</h1>
      <p className="sub-text">Now call me xD</p>
      <button className="back-btn" onClick={() => navigate("/")}>Go Back 🔙</button>
    </div>
  );
};

export default NextPage;
