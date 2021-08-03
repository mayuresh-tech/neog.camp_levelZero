import { useState } from "react";
import "./styles.css";

const emojiDict = {
  "😀": "happy",
  "😁": "laughing",
  "🤗": "hug",
  "🤔": "thinking",
  "😑": "bored",
  "👍": "thumbs up",
  "👏": "clap",
  "😎": "swag",
  "😒": "doubtful",
  "😮": "surprised",
  "🤤": "tasty",
  "🤑": "rich",
  "😴": "sleepy",
  "🏄": "surfing",
  "🏊": "swimming",
  "🚣": "boating"
};

const emojiList = [
  "😀",
  "😁",
  "🤗",
  "🤔",
  "😑",
  "👍",
  "👏",
  "😎",
  "😒",
  "😮",
  "🤤",
  "🤑",
  "😴",
  "🏄",
  "🏊",
  "🚣"
];

export default function App() {
  const [userInput, setUserInput] = useState("");

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  function changeText(event) {
    event.target.value = event.target.value.trim();
    if (event.target.value in emojiDict) {
      setUserInput(emojiDict[event.target.value]);
    } else if (Object.values(emojiDict).includes(event.target.value)) {
      setUserInput(getKeyByValue(emojiDict, event.target.value));
    } else if (event.target.value === "") {
      setUserInput("");
    } else {
      setUserInput("No Emoji found in Database");
    }
  }

  function clickHandler(item) {
    setUserInput(emojiDict[item]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        placeholder="Type Emoji name or paste an Emoji"
        onChange={changeText}
      />
      <div className="emojiList">
        <ul>
          {emojiList.map((item, index) => {
            return (
              <li key={item} onClick={() => clickHandler(item)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="output">
        <h2>{userInput}</h2>
      </div>
    </div>
  );
}
