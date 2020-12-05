import * as React from "react";
import { useState } from "react";
import style from "./password.scss";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

type label = string | JSX.Element;

// マスク表示切替機能付きのパスワード入力欄
export const Simple: React.FCXI<{
  label: label; // 入力項目名
}> = (props) => {
  const [mask, setMask] = useState(true); // trueならマスキング
  return(
    <div className={`${style.simple} ${props.className}`}>
      <label>
        <h1>{props.label}</h1>
        <span>
          <input 
            type={mask ? "password" : "text"} // 表示/非表示切替
            value={props.value} 
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
          />
          <FontAwesomeIcon // 表示切替アイコン
            className={style.toggle} 
            onClick={() => {setMask(!mask);}}
            icon={mask ? faEye : faEyeSlash} 
          />
        </span>
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
  const [mask, setMask] = useState(true); // trueならマスキング
  return(
    <div className={`${style.placeholder} ${props.className}`}>
      <label>
        <h1>{props.label}</h1>
        <span>
          <input 
            type={mask ? "password" : "text"} // 表示/非表示切替
            placeholder={props.placeholder}
            value={props.value} 
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
          />
          <FontAwesomeIcon // 表示切替アイコン
            className={style.toggle} 
            onClick={() => {setMask(!mask);}}
            icon={mask ? faEye : faEyeSlash} 
          />
        </span>
        <p>{props.alert}</p>
      </label>
    </div>
  );
};

