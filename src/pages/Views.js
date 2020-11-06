import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Views = () => {
  useEffect(() => {
    FetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const FetchItems = async () => {
    const api = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const data = await api.json();
    const items = data.data;
    setItems(items);
  };
  return (
    <div>
      {items.map((item) => {
        const itemName = item.item.name;
        const itemImg = item.item.images.icon;
        console.log(itemImg);
        const iterDescription = item.item.description;

        return (
          <div className="Views_li">
            <h4 key={item.itemId} className="Views_h3">
              <ul className="Views_ul">
                <img src={itemImg} alt="ok" className="image" />
                <Link
                  to={`/views/${item.itemId}`}
                  style={{ textDecoration: "none", lineHeight: "30px" }}
                >
                  {itemName}
                </Link>

                <h6>{iterDescription}</h6>
              </ul>
            </h4>
          </div>
        );
      })}
    </div>
  );
};
export default Views;
