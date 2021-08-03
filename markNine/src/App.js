import { useState } from "react";
import "./styles.css";

export default function App() {
  const teachersDict = {
    Java: [
      {
        teacher: "Java Brains",
        rating: "5 / 5"
      },
      {
        teacher: "Telusko",
        rating: "4.5 / 5"
      },
      {
        teacher: "freeCodeCamp.org",
        rating: "4.5 / 5"
      }
    ],
    React: [
      {
        teacher: "Tanay Pratap",
        rating: "5 / 5"
      },
      {
        teacher: "Akshay Saini",
        rating: "5 / 5"
      }
    ],
    "C++": [
      {
        teacher: "Abdul Bari",
        rating: "5 / 5"
      },
      {
        teacher: "Love Babbar",
        rating: "5 / 5"
      },
      {
        teacher: "freeCodeCamp.org",
        rating: "4.5 / 5"
      },
      {
        teacher: "CS Dojo",
        rating: "4 / 5"
      }
    ]
  };

  const [displayDict, setDisplayDict] = useState([]);

  function clickHandler(item) {
    setDisplayDict(teachersDict[item]);
  }

  return (
    <div className="App">
      <h1 className="heading">
        <span>👨‍🏫</span> good Teachers
      </h1>

      <p className="smallText">
        Check out my favourite Teachers. Select a subject to get started.
      </p>

      {Object.keys(teachersDict).map((item, index) => {
        return (
          <button key={item} onClick={() => clickHandler(item)}>
            {item}
          </button>
        );
      })}
      <hr />
      <ul>
        <div className="displayList">
          {displayDict.map((item, index) => {
            return (
              <li key={item.teacher}>
                <div className="card">
                  <div className="teacherName">{item.teacher}</div>
                  <div className="teacherRating">{item.rating}</div>
                </div>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
}
