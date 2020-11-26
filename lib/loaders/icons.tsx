import * as React from "react";
import style from "./icons.scss";

export const Loader: React.FCX<{}> = (props) => {
  return(<div className={`${style.loader} ${props.className}`} />);
};
