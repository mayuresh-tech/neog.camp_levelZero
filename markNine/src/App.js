import { useState } from "react";
import "./styles.css";

export default function App() {
  const teachersDict = {
    Java: [
      {
        teacher: "Java Brains",
        description: "Best and in-depth knowledge of Java",
        rating: "5 / 5"
      },
      {
        teacher: "Telusko",
        description: "Friend like Teacher",
        rating: "4.5 / 5"
      },
      {
        teacher: "freeCodeCamp.org",
        description: "Professional and easy to understand Java courses",
        rating: "4.5 / 5"
      }
    ],
    React: [
      {
        teacher: "Tanay Pratap",
        description: "Best Teacher for ReactJS",
        rating: "5 / 5"
      },
      {
        teacher: "Akshay Saini",
        description: "Deep knowledge of JavaScript",
        rating: "5 / 5"
      }
    ],
    "C++": [
      {
        teacher: "Abdul Bari",
        description: "Data Structures Master",
        rating: "5 / 5"
      },
      {
        teacher: "Love Babbar",
        description: "Roadmaps maker",
        rating: "5 / 5"
      },
      {
        teacher: "freeCodeCamp.org",
        description: "Professional C++ content",
        rating: "4.5 / 5"
      },
      {
        teacher: "CS Dojo",
        description: "Easy to understand DS courses",
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
                  <div className="teacherDescription">{item.description}</div>
                </div>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
}
