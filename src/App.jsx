import React, { useState, useEffect } from "react";
import "./App.scss";
import Button from "./ui/Button/Button";

const App = () => {
  const emojiList = ["😎", "💁‍", "👨🏻‍💻"];
  const [currentEmoji, setEmoji] = useState("👨🏻‍💻");
  const getRandomImage = () =>
    setEmoji(emojiList[Math.ceil(Math.random() * emojiList.length - 1)]);
  return (
    <>
      <h1 className="Greet__msg">
        Hello, From new React App
        <span role="img" aria-label="man">
          {currentEmoji}
        </span>
      </h1>
      <Button onClick={getRandomImage}>Еще картинки</Button>
    </>
  );
};

export default App;
