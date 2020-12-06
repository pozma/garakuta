import * as React from "react";
import { useState } from "react";
import style from "./text.scss";

type label = string | JSX.Element;

// 単純なテキスト入力フィールド
export const Simple: React.FCXI<{}> = (props) => {
  const {className, ...other} = props;
  return(
    <div className={`${style.simple} ${className}`}>
      <input 
        {...other}
        type="text" 
      />
    </div>
  );
};

// ラベル付き
export const Labeled: React.FCXI<{ label: label; }> = (props) => {
  const {className, label, ...other} = props;
  return(
    <div className={`${style.labeled} ${className}`}>
      <label>
        <h1>{label}</h1>
        <input 
          {...other}
          type="text" 
        />
      </label>
    </div>
  );
};

// プレースホルダーにラベルを表示
export const Placeholder: React.FCXI<{ label: label; }> = (props) => {
  const {className, label, ...other} = props;
  return(
    <div className={`${style.placeholder} ${className}`}>
      <label>
        <h1>{label}</h1>
        <input 
          {...other}
          type="text" 
        />
      </label>
    </div>
  );
};

