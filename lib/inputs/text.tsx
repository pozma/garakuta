import * as React from "react";
import { useState } from "react";
import style from "./text.scss";

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
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
      </label>
    </div>
  );
};

// プレースホルダーにラベルを表示
export const Placeholder: React.FCXI<{
  label: label; // 入力項目名
  placeholder: string;
  alert: label;
}> = (props) => {
  return(
    <div className={`${style.placeholder} ${props.className}`}>
      <label>
        <h1>{props.label}</h1>
        <input 
          type="text" 
          placeholder={props.placeholder}
          value={props.value} 
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
        <p>{props.alert}</p>
      </label>
    </div>
  );
};

