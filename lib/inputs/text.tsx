import * as React from "react";
import { useState } from "react";
import style from "./text.scss";

// 箱タイプ
export const Box: React.FCXI<{}> = (props) => {
  const {className, ...other} = props;
  return(
    <div className={`${style.box} ${className}`}>
      <input 
        {...other}
        type="text" 
      />
    </div>
  );
};

// 下線タイプ
export const Underline: React.FCXI<{}> = (props) => {
  const {className, ...other} = props;
  return(
    <div className={`${style.underline} ${className}`}>
      <input 
        {...other}
        type="text" 
      />
    </div>
  );
};

