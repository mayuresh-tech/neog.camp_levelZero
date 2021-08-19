import "./styles.css";
import stockImage from "../src/stock.svg";
import { useState } from "react";
import loadingGif from "../src/loading.gif";

export default function App() {
  const [percentage, setPercentage] = useState();
  const [rupees, setRupees] = useState();
  const [showLoading, setShowLoadingAnim] = useState();

  var totalPurchasePrice, totalCurrentPrice;
  function checkProfitORLoss(e) {
    e.preventDefault();
    document.querySelector(".box").style.backgroundColor = "white";
    document.querySelector(".profit").style.display = "none";
    document.querySelector(".loss").style.display = "none";
    var purchasePrice = document.querySelector("#purchase-price").value;
    var purchaseQuan = document.querySelector("#purchase-quantity").value;
    var currentPrice = document.querySelector("#current-price").value;

    if (purchasePrice !== "" && purchaseQuan !== "" && currentPrice !== "") {
      if (purchasePrice != 0 && purchaseQuan != 0 && currentPrice != 0) {
        document.querySelector("#loading-image").style.display = "block";
        setShowLoadingAnim(loadingGif);
        setTimeout(() => {
          document.querySelector("#loading-image").style.display = "none";
          totalPurchasePrice = purchasePrice * purchaseQuan;
          totalCurrentPrice = currentPrice * purchaseQuan;

          if (totalCurrentPrice > totalPurchasePrice) {
            var difference = totalCurrentPrice - totalPurchasePrice;
            let profitLossPercentage = (
              (difference / purchasePrice) *
              100
            ).toFixed(2);
            let totalProfit = difference * purchaseQuan;
            setPercentage(profitLossPercentage);
            setRupees(totalProfit);
            document.querySelector(".box").style.backgroundColor = "#79ea86";
            document.querySelector(".profit").style.display = "block";
          } else {
            var difference = totalCurrentPrice - totalPurchasePrice;
            let profitLossPercentage = Math.abs(
              ((difference / purchasePrice) * 100).toFixed(2)
            );
            let totalLoss = Math.abs(difference * purchaseQuan);
            setPercentage(profitLossPercentage);
            setRupees(totalLoss);
            if (profitLossPercentage > 50) {
              document.querySelector(".box").style.backgroundColor = "#e75757";
            }
            document.querySelector(".loss").style.display = "block";
          }
        }, 2500);
      } else {
        alert("Enter correct data");
      }
    } else {
      alert("Enter correct data");
    }
  }

  return (
    <div className="App">
      <div className="box">
        <div className="firstBox">
          <img className="image" src={stockImage} alt="Stock Image" />
        </div>
        <div className="secondBox">
          <p id="heading">Stock status: Profit or Loss</p>
          <div id="topic">
            Purchase Price (₹) <br />{" "}
            <input id="purchase-price" type="number" /> <br />
          </div>
          <div id="topic">
            Purchase Quantity <br />{" "}
            <input id="purchase-quantity" type="number" /> <br />
          </div>
          <div id="topic">
            Current Price (₹) <br /> <input id="current-price" type="number" />{" "}
            <br />
          </div>
          <button
            onClick={(e) => {
              checkProfitORLoss(e);
            }}
            id="check"
          >
            Check
          </button>
          <img id="loading-image" src={showLoading} alt="loading" />
          <div className="profit">
            <p>🎉 You Gained {percentage}% </p>
            <p>👍 Total Profit of Rs. {rupees}</p>
          </div>
          <div className="loss">
            <p>😞 You Lost {percentage}% </p>
            <p>👎 Total Loss of Rs. {rupees}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
