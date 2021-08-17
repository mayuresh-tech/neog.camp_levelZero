import { useState } from "react";
import "./styles.css";
import luckyImage from "../src/lucky.svg";
import unLuckyImage from "../src/unlucky.svg";

export default function App() {
  const [showImage, setShowImage] = useState();
  const [result, setResult] = useState();

  function cancelAlertBox() {
    document.querySelector(".alertBox").style.display = "none";
  }

  function showLucky(e) {
    e.preventDefault();
    var userDate = document.querySelector("#date-input").value;
    var userLuckyNumber = document.querySelector("#lucky-input").value;

    if (
      userDate !== "" &&
      userLuckyNumber !== "" &&
      userLuckyNumber !== 0 &&
      userLuckyNumber !== "0"
    ) {
      const dateConvert = userDate.split("-");
      let sumUserDate = 0;

      dateConvert.map((string) => {
        for (let i = 0; i < string.length; i++) {
          sumUserDate += Number(string[i]);
        }
      });

      if (sumUserDate % Number(userLuckyNumber) === 0) {
        setShowImage(luckyImage);
        document.querySelector(".alertBox").style.display = "none";
        document.querySelector("#image").style.display = "block";
        setResult("Lucky!!");
      } else {
        setShowImage(unLuckyImage);
        document.querySelector(".alertBox").style.display = "none";
        document.querySelector("#image").style.display = "block";
        setResult("Unlucky");
      }
    } else {
      alert("Enter correct data");
    }
  }

  return (
    <div className="App">
      <p id="heading">Is you Birthday lucky?</p>
      <div className="alertBox">
        <button onClick={cancelAlertBox} id="cancel-button">
          X
        </button>
        <p>We don't store you Data!</p>
      </div>
      <div className="mainBox">
        <p>Enter DOB and your Lucky number</p>
        <form>
          <div className="dob">
            <p className="note">
              Date of Birth:
              <span>
                <input id="date-input" type="date" required />
              </span>
            </p>
          </div>
          <div className="dob">
            <p className="note">
              Lucky number:
              <span>
                <input id="lucky-input" type="number" required />
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              showLucky(e);
            }}
            className="check"
          >
            Check
          </button>
        </form>
      </div>
      <p id="result">{result}</p>
      <img id="image" src={showImage} alt="You are Lucky!!" />
    </div>
  );
}
