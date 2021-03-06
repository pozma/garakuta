import * as React from "react";
import { useState } from "react";
import style from "./password.scss";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// 箱タイプ
export const Box: React.FCI<{}> = (props) => {
  const {id, className, ...other} = props;
  const [mask, setMask] = useState(true); // trueならマスキング
  return(
    <div className={`${style.box} ${className}`} id={id}>
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

// 下線タイプ
export const Underline: React.FCI<{}> = (props) => {
  const {id, className, ...other} = props;
  const [mask, setMask] = useState(true); // trueならマスキング
  return(
    <div className={`${style.underline} ${className}`} id={id}>
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

