import React from "react";

const MemoDemo = (props) => {
  return <h1>{props.numbers}</h1>
};

export default React.memo(MemoDemo);