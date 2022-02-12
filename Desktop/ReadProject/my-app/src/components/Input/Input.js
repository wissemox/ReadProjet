import React from "react";

function Input(props) {
  return (
    <div>
      <div
        style={{
        marginTop:"11px",

        marginLeft:"7px",
          position: "absolute",
            
        }}
      >
        <img style={{  width: "18px",
          height: "18px",}} src={process.env.PUBLIC_URL + `/fav/${props.icon}`}/>
      </div>
      <input placeholder={props.placeholder} className={props.className} />
    </div>
  );
}
export default Input;
