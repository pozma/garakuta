import * as React from "react";
import style from "./basic.scss";

interface ClickEvent<T = HTMLElement> extends React.SyntheticEvent<T> {
};

// 何の変哲もないただのボタン
export const Simple: React.FCX<{
  label: string; // ボタンのテキスト
  onClick: (e: React.SyntheticEvent) => void; // クリックハンドラ
}> = (props) => {

  return (
    <button // 送信ボタン
    className={`${style.simple} ${props.className}`}
    onClick={props.onClick}>
      {props.label}
    </button>
  );
};

