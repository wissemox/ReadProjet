import React from "react";
import Card from "../../components/Card/Card";
import PaymenSystem from "./Map/PaymenSystem";
function PaymentOffre() {
  const MapCard = [
    { Image: "amazon.svg" },
    { Image: "paypal.svg" },
    { Image: "googlePlay.png" },
    { Image: "amazon.svg" },
    { Image: "paypal.svg" },
    { Image: "amazon.svg" },
    { Image: "paypal.svg" },
  ];
     
  return (
    <div className="pt-4 pb-4 Hoversq" style={{ backgroundColor: "#161B28", width: "100%" }}>
      <div
        className="flex widthResponsiveOffer ChangeStyleScroll"
        style={{
          maxWidth:"1500px",
          borderRadius:"10px",
          backgroundColor: "#141522",
           marginLeft:"auto",
          marginRight:"auto",
          overflowY: "scroll",
          overflowY: "hidden",
        }}
      >
        {MapCard.map((el) => (
          <div className="p-4 " style={{ width: "200px" }}>
            <PaymenSystem el={el} Name="Wissm" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentOffre;
