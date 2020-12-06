import * as React from "react";
import { useState } from "react";
import style from "./password.scss";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

type label = string | JSX.Element;

// マスク表示切替機能付きのパスワード入力欄
export const Simple: React.FCXI<{}> = (props) => {
  const {className, ...other} = props;
  const [mask, setMask] = useState(true); // trueならマスキング
  return(
    <div className={`${style.simple} ${className}`}>
      <input 
        {...other}
        type={mask ? "password" : "text"} // 表示/非表示切替
      />
      <FontAwesomeIcon // 表示切替アイコン
        className={style.toggle} 
        onClick={() => {setMask(!mask);}}
        icon={mask ? faEye : faEyeSlash} 
      />
    </div>
  );
};

// ラベル付きパスワード入力欄
export const Labeled: React.FCXI<{ label: label; }> = (props) => {
  const {className, label, ...other} = props;
  const [mask, setMask] = useState(true); // trueならマスキング
  return(
    <div className={`${style.labeled} ${className}`}>
      <label>
        <h1>{label}</h1>
        <span>
          <input 
            {...other}
            type={mask ? "password" : "text"} // 表示/非表示切替
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
export const Placeholder: React.FCXI<{ label: label; }> = (props) => {
  const {className, label, ...other} = props;
  const [mask, setMask] = useState(true); // trueならマスキング
  return(
    <div className={`${style.placeholder} ${className}`}>
      <label>
        <h1>{label}</h1>
        <span>
          <input 
            {...other}
            type={mask ? "password" : "text"} // 表示/非表示切替
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

