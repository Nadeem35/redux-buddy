import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="card" style={{ width: "45rem" }}>
        <div className="card-body">{children}</div>
      </div>
    </>
  );
};

export default Container;
