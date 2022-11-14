import React, { MouseEvent } from "react";
import { handleMouseEvent } from "./CloseNavMovile";
type Props = {};

const CrossClose = (props: Props) => {
  return (
    <button
      className="button-menu close-button-menu"
      onClick={handleMouseEvent}
    >
      <svg className="svg-cross">
        <path
          d="M 2.0,2.0 l 23,23 M 23,2.0 l -23,23"
          stroke="#fff"
          strokeWidth="2.5"
          rx="10"
        ></path>
      </svg>
    </button>
  );
};

export default CrossClose;
