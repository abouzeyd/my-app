import React, { useState, useEffect } from "react";

const ItemDetail = ({ match }) => {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);
  const [item, setItem] = useState(null);
  const fetchItem = async () => {
    const response = await fetch(
      `https://fortnite-api.theapinetwork.com/store/get`
    );
    if (!response.ok) {
      console.error(response);
      return;
    }
    const responseData = await response.json();
    const item = responseData.data[0].item;
    console.log(item);
    setItem(item);
  };
  if (!item) return <h1>Loading...</h1>;
  console.log(item.images.icon);
  return (
    <div>
      <h1>{item.name}</h1>
      <img
        src={item.images.icon}
        alt={item.description}
        width="200em"
        style={{ backgroundColor: "black" }}
      />
      <h2 style={{ pb: "30em" }}>{item.description}</h2>
    </div>
  );
};
export default ItemDetail;
