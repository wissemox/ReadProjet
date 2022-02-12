import * as React from "react";
 
import AppBar from "@mui/material/AppBar";
import { Dialog } from "@mui/material";

const Animation  =()=>{
 
  return (
    <Dialog  open={true}>
      <AppBar
        style={{
          backgroundColor: "rgba(19, 19, 19, 0.402);",
          backgroundColor: "transparent",
        }}
      >
          
        <div className="flex  justify-center mt-14">
          <img 
            className="Animationlogo01"
            style={{ width: "100px", height: "650px" }}
            src={process.env.PUBLIC_URL + "/logo/logoAnimation.svg"}
          />
          
        </div>
      </AppBar>
    </Dialog>
  );
}
export default Animation