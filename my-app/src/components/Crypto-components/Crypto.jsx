import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Crypto.css";
import Coin from "./Coin";

function Crypto() {
  //api datan finns i crypto
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getCrypto() {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=sek&order=market_cap_desc&per_page=50&page=1&sparkline=false`
        )
        .then((res) => {
          setCrypto(res.data);
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    }
    getCrypto();
  }, []);
  //knapptryck i search o sedan jämför med filteredCoins om det finns
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filterCoins = crypto.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="crypto-app">
      <div className="crypto-search">
        <h1 className="crypto-text">Search currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search..."
            className="crypto-input"
            //knapptryck
            onChange={handleChange}
          />
        </form>
      </div>
      {/* filtreringen använder data från crypto, därför kollar jag det först */}
      {crypto &&
        filterCoins.map((crypto) => {
          return (
            <Coin
              key={crypto.id}
              name={crypto.name}
              image={crypto.image}
              symbol={crypto.symbol}
              marketcap={crypto.market_cap}
              price={crypto.current_price}
              priceChange={crypto.price_change_percentage_24h}
              volume={crypto.total_volume}
            />
          );
        })}
    </div>
  );
}

export default Crypto;
