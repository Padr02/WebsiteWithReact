import React from "react";
import "./Coin.css";

const Coin = ({ name, image, symbol, price, priceChange, marketcap }) => {
  //formar return med hjälp av mottagen props från fadern
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">SEK: {price}:-</p>
          {/* toLocaleString skulle sätta ett "," tecken på rätt ställen men fick istället mellanrum */}

          {priceChange < 0 ? (
            <p className="coin-red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Market Cap: {marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
