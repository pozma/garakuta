import * as React from "react";
import { useState } from 'react';
// icon, animation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// 単純なテキストエリア入力フィールド
export const TextArea: React.FC<{
  title: string; // 入力項目名
  value: string; // 入力値
  setValue: React.Dispatch<React.SetStateAction<string>>; // 入力状態更新関数
  style: {[className: string]: string}; // 親コンポーネントご指定のスタイル
}> = (props) => {
  return(
    <div className={props.style.input}>
      <label>
        <div className={props.style.label}>
          <span className={props.style.title}>{props.title}</span>
        </div>
        <textarea 
          className={props.style.field}
          value={props.value} 
          onChange={(e) => props.setValue(e.target.value)}
        />
      </label>
    </div>
  );
};

// ドロップダウン
export const Select: React.FC<{
  title: string; // 入力項目名
  value: string; // 入力値
  setValue: React.Dispatch<React.SetStateAction<string>>; // 入力状態更新関数
  droplist: {value: number, disp: string}[];
  style: {[className: string]: string}; // 親コンポーネントご指定のスタイル
}> = (props) => {
  
  const options = props.droplist.map(opt => {
    return (
      <option key={opt.value} value={opt.value}>{opt.disp}</option>
    );
  });

  return(
    <div className={props.style.input}>
      <label>
        <div className={props.style.label}>
          <span className={props.style.title}>{props.title}</span>
        </div>
        <select
          className={props.style.field}
          value={props.value} 
          onChange={(e) => props.setValue(e.target.value)}
        >
         {options}
        </select>
      </label>
    </div>
  );
};



// ユーザー名入力エリア
export const UsernameInput: React.FC<{
  title: string; // 入力項目名
  desc: string; // 入力欄の説明
  value: string; // 入力値
  setValue: React.Dispatch<React.SetStateAction<string>>; // 入力状態更新関数
  callout: string; // 吹き出し
  style: {[className: string]: string}; // 親コンポーネントご指定のスタイル
}> = (props) => {
  return(
    <div className={props.style.input}>
      <label>
        <div className={props.style.label}>
          <span className={props.style.title}>{props.title}</span>
          <span className={props.style.desc}>{props.desc}</span>
        </div>
        <input 
          type="text" 
          className={props.style.field}
          value={props.value} 
          onChange={(e) => props.setValue(e.target.value)}
        />
      </label>
      {props.callout && <span // 吹き出し
        className={props.style.callout}>
        {props.callout}
      </span>}
    </div>
  );
};


// パスワード入力エリア
export const PasswordInput: React.FC<{
  title: string; // 入力項目名
  desc: string; // 入力欄の説明
  value: string; // 入力値
  setValue: React.Dispatch<React.SetStateAction<string>>; // 入力状態更新関数
  callout: string; // 吹き出し
  style: {[className: string]: string}; // 親コンポーネントご指定のスタイル
}> = (props) => {
  // 入力値の表示/非表示をコントロール
  const [mask, setMask] = useState(true);
  return (
    <div
    className={props.style.input}>
      <label>
        <div className={props.style.label}>
          <span className={props.style.title}>{props.title}</span>
          <span className={props.style.desc}>{props.desc}</span>
        </div>
        <input
          type={mask ? "password" : "text"} // 表示/非表示切替
          className={props.style.field}
          value={props.value} 
          onChange={(e) => props.setValue(e.target.value)}
        />
        <FontAwesomeIcon // 表示切替アイコン
          className={props.style.toggle} 
          onClick={() => {setMask(!mask);}}
          icon={mask ? ["fas", "eye"] : ["fas", "eye-slash"]} 
        />
      </label>
      {props.callout && <span // 吹き出し
        className={props.style.callout}>
        {props.callout}
      </span>}
    </div>
  );
}


