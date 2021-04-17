import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🙍‍♂️": "man frowning",
  "🙎‍♂️": "man pouting",
  "🙅‍♂️": "man gesturing NO",
  "🙆‍♂️": "man gesturing OK",
  "🙇‍♂️": "man bowing",
  "🤷‍♂️": "man shrugging"
};
export default function App() {
  var [meaning, setMeaning] = useState("");
  var emojis = Object.keys(emojiDictionary);
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function onClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>EmojiPedia</h1>
      <input
        style={{ backgroundColor: "#EEF2FF" }}
        onChange={emojiInputHandler}
      ></input>
      <h2>Meaning- {meaning}</h2>
      {emojis.map((emoji) => {
        return (
          <span
            style={{ padding: "1rem", fontSize: "x-large", cursor: "pointer" }}
            key={emoji}
            onClick={() => onClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
