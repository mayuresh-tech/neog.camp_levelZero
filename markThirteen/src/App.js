import { useState } from "react";
import "./styles.css";
import loadingGif from "../src/loading.gif";

export default function App() {
  const datesInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [result, setResult] = useState();
  const [result_missed, setResultMissed] = useState();
  const [showLoading, setShowLoadingAnim] = useState();

  function findRestDays(date, month, year) {
    let dateNo1 = Number(date);
    let monthNo1 = Number(month);
    let yearNo1 = Number(year);

    let dateNo2 = Number(date);
    let monthNo2 = Number(month);
    let yearNo2 = Number(year);

    for (var i = 1; i > 0; i++) {
      dateNo1 = dateNo1 + 1;
      if (dateNo1 > Number(datesInMonth[monthNo1 - 1])) {
        dateNo1 = 1;
        monthNo1 = monthNo1 + 1;
        if (monthNo1 > 12) {
          monthNo1 = 1;
          yearNo1 = yearNo1 + 1;
        }
      }

      let yearString = yearNo1.toString();
      let monthString = monthNo1.toString();
      let dateString = dateNo1.toString();

      if (monthString.length === 1) {
        monthString = "0" + monthString;
      }
      if (dateString.length === 1) {
        dateString = "0" + dateString;
      }

      let setFlagDate = checkAllCombination(
        yearString,
        monthString,
        dateString
      );

      if (setFlagDate) {
        return [`${setFlagDate}`, i];
      }

      if (yearNo2 > 1) {
        dateNo2 = dateNo2 - 1;
        if (monthNo2 < 1) {
          monthNo2 = 12;
          yearNo2 = yearNo2 - 1;

          if (yearNo2 < 1) {
            break;
          }
          dateNo2 = datesInMonth[monthNo2 - 1];
        }
      }

      let yearStrings = yearNo2.toString();
      let monthStrings = monthNo2.toString();
      let dateStrings = dateNo2.toString();

      if (monthStrings.length === 1) {
        monthStrings = "0" + monthStrings;
      }
      if (dateStrings.length === 1) {
        dateStrings = "0" + dateStrings;
      }

      let setFlagDates = checkAllCombination(
        yearStrings,
        monthStrings,
        dateStrings
      );

      if (setFlagDates) {
        return [`${setFlagDate}`, i];
      }
    }
  }

  function isPailndrome(StringChecking) {
    const max = Math.floor(StringChecking.length / 2);

    for (var i = 0; i < max; i++) {
      if (StringChecking[i] !== StringChecking[StringChecking.length - 1 - i]) {
        return false;
      }
    }

    return true;
  }

  function checkAllCombination(yyyy, mm, dd) {
    const formateOne = yyyy + mm + dd;
    const formateTwo = dd + mm + yyyy;
    const formateThree = mm + dd + yyyy.substring(2);
    const formateFour = Number(mm) + dd + yyyy;

    if (isPailndrome(formateOne)) {
      return `${yyyy} - ${mm} - ${dd}`;
    } else if (isPailndrome(formateTwo)) {
      return `${dd}-${mm}-${yyyy}`;
    } else if (isPailndrome(formateThree)) {
      return `${mm}-${dd}-${yyyy.substring(2)}`;
    } else if (isPailndrome(formateFour)) {
      return `${Number(mm)}-${dd}-${yyyy}`;
    } else {
      return null;
    }
  }

  function checkPalindrome(e) {
    setResult("");
    setResultMissed("");
    e.preventDefault();
    var userDate = document.querySelector("#date-input").value;
    if (userDate !== "") {
      const dateConvert = userDate.split("-");

      const inputYear = dateConvert[0];
      const inputMonth = dateConvert[1];
      const inputDate = dateConvert[2];

      let setFlag = null;

      document.querySelector("#loading-image").style.display = "block";
      setShowLoadingAnim(loadingGif);
      setTimeout(() => {
        setFlag = checkAllCombination(inputYear, inputMonth, inputDate);
        if (setFlag) {
          document.querySelector("#loading-image").style.display = "none";
          setResult("Great! Your Birthdate is Palindrome");
          setResultMissed("");
        } else {
          let [nextdate, difference] = findRestDays(
            inputDate,
            inputMonth,
            inputYear
          );
          document.querySelector("#loading-image").style.display = "none";
          setResult("Your Birthdate is Not Palindrome");
          setResultMissed(
            "Next Palindrome date is " +
              nextdate +
              " and you missed it by " +
              difference +
              " days"
          );
        }
      }, 2500);
    } else {
      alert("Enter correct date");
    }
  }

  return (
    <div className="App">
      <p id="heading">Is you Birthday Palindrome?</p>
      <p id="note">
        To increase your chances of winning this app checks your DOB in 3
        formats yyyy-mm-dd, dd-mm-yyyy, mm-dd-yy
      </p>
      <div className="mainBox">
        <form>
          <div className="dob">
            <p className="note">
              Enter your Date of Birth : <br />
              <span>
                <input id="date-input" type="date" required />
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              checkPalindrome(e);
            }}
            className="check"
          >
            Check
          </button>
        </form>
      </div>
      <img id="loading-image" src={showLoading} alt="loading" />
      <p id="result">{result}</p>
      <p id="result-missed">{result_missed}</p>
    </div>
  );
}
