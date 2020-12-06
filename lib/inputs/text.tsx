import * as React from "react";
import { useState } from "react";
import style from "./text.scss";

type label = string | JSX.Element;

// 単純なテキスト入力フィールド
export const Simple: React.FCXI<{}> = (props) => {
  return(
    <div className={`${style.simple} ${props.className}`}>
      <input 
        type="text" 
        value={props.value} 
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </div>
  );
};

// ラベル付き
export const Labeled: React.FCXI<{
  label: label; // 入力項目名
}> = (props) => {
  return(
    <div className={`${style.labeled} ${props.className}`}>
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
      </label>
    </div>
  );
};

