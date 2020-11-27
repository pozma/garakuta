import * as React from "react";
import style from "./basic.scss";

type label = string | JSX.Element; // ボタンのテキストの型（JSXでも受け付ける）

// 何の変哲もないただのボタン
export const Simple: React.FCXB<{
  label: label; // ボタンのテキスト
}> = (props) => {

  return (
    <button
    className={`${style.simple} ${props.className}`}
    onClick={props.onClick}>
      {props.label}
    </button>
  );
};


// 通常とロード中の状態を持つボタン（ロード中は押せない）
export const Loading: React.FCXB<{
  labels: [label, label]; // [通常, ロード中]
  isLoading: boolean; // true -> ロード中
  altClassName?: string; // ロード中のみ適用するスタイル
}> = (props) => {

  const normal: JSX.Element = ( // 通常状態
    <button
    className={`${style.loading_normal} ${props.className}`}
    onClick={props.onClick}>
      {props.labels[0]}
    </button>
  );

  const busy: JSX.Element = ( // ロード中
    <button
    className={`${style.loading_busy} ${props.className} ${props.altClassName}`}
    onClick={() => {}}>
      {props.labels[1]}
    </button>
  );

  return (props.isLoading ? <>{busy}</> : <>{normal}</>);
};


