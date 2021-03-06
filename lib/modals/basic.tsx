import * as React from "react";
import style from "./basic.scss";

export const Simple: React.FCD<{}> = (props) => {

  const {className, children, ...other} = props;

  return (
    <div className={style.simple}>
      <div className={`${style.mask} ${className}`} />
      <div 
        className={style.modal}
        {...other}
      >
        {children}
      </div>
    </div>
  );
};

