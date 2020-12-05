import * as React from "react";
import { useState } from "react";
import style from "./text.scss";
// icon, animation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type label = string | JSX.Element;

// 単純なテキスト入力フィールド
export const Simple: React.FCXI<{
  label: label; // 入力項目名
}> = (props) => {
  return(
    <div className={`${style.simple} ${props.className}`}>
      <label>
        <h1>{props.label}</h1>
        <input 
          type="text" 
          value={props.value} 
          onChange={props.onChange}
        />
      </label>
    </div>
  );
};

