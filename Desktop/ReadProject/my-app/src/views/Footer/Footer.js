import React, { useState } from "react";

function Footer() {
  const FooterMap = [
    { Name: "Earn", Image: "earn-icon.svg" },
    { Name: "Earn", Image: "earn-icon.svg" },
    { Name: "Earn", Image: "earn-icon.svg" },
    { Name: "Earn", Image: "earn-icon.svg" },
  ];
  return (
    <div
      className="DisplayNoneFooterResponsive " 
      style={{
        position: "fixed",
        bottom: "0px",
        backgroundColor: "#161B28",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "space-between",
        }}
        className="flex p-4"
      >
        {FooterMap.map((el) => (
          <div>
            <img
              className="WidthResponsiveIcon"
              src={process.env.PUBLIC_URL + "/fav/earn-icon.svg"}
            />
            <p className="pt-2 FontSizeResponsive" style={{ color: "white" }}>
              Earn
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
