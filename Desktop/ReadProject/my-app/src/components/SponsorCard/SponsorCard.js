import React from "react";

function SponsorCard(props) {
  return (
    <div
      className="PaddingResponsiveSponsorCard"
      style={{
        backgroundColor: "#1D2333",
     
        borderRadius: "20px",
      }}
    >
      <img style={{ marginLeft:"auto" ,marginRight:"auto"}} className='ml-1 mr-2  WidthResponsiveSponsorCard'   src={process.env.PUBLIC_URL+`/fav/${props.Image.Image}`}/>

    </div>
  );
}

export default SponsorCard;
