import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflow: "scroll",
        borderTop: "10px solid #ff41b4",
        height: "80vh",
        margin: "5vh 0",
        padding: "5vh 0",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
