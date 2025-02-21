import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import "./styles.css";

const App = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container">
      {!opened ? (
        <button className="open-box" onClick={() => setOpened(true)}>Open Me 🎁</button>
      ) : (
        <>
          <Confetti />
          <h1 className="congrats-text">🎉 Congratulations, Student Pilot Adill Ibrahim! ✈️</h1>
          <p className="sub-text">You made it through the medicals! Now, get ready for takeoff. 🚀</p>
          <button className="next-btn" onClick={() => navigate("/next")}>Now What's Next? 😏</button>
        </>
      )}
    </div>
  );
};

export default App;
