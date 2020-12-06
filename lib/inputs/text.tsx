import * as React from "react";
import { useState } from "react";
import style from "./text.scss";

// 箱タイプ
export const Box: React.FCI<{}> = (props) => {
  const {id, className, ...other} = props;
  return(
    <div className={`${style.box} ${className}`} id={id}>
      <input 
        {...other}
        type="text" 
      />
    </div>
  );
};

// 下線タイプ
export const Underline: React.FCI<{}> = (props) => {
  const {id, className, ...other} = props;
  return(
    <div className={`${style.underline} ${className}`} id={id}>
      <input 
        {...other}
        type="text" 
      />
    </div>
  );
};

