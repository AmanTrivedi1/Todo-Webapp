import React from "react";

const Loading = () => {
  return (
    <>
      <div className="loading__component">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
