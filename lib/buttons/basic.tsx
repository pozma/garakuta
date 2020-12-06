import * as React from "react";
import style from "./basic.scss";

type label = string | JSX.Element; // ボタンのテキストの型（JSXでも受け付ける）

// 何の変哲もないただのボタン
export const Simple: React.FCXB<{ label: label; }> = (props) => {

  const {label, className, ...other} = props;
  return (
    <button
      {...other}
      className={`${style.simple} ${className}`}
    >
      {label}
    </button>
  );
};


// 通常とロード中の状態を持つボタン（ロード中は押せない）
export const Loading: React.FCXB<{
  labels: [label, label]; // [通常, ロード中]
  isLoading: boolean; // true -> ロード中
  altClassName?: string; // ロード中のみ適用するスタイル
}> = (props) => {

  const {className, labels, isLoading, altClassName, ...other} = props;

  const normal: JSX.Element = ( // 通常状態
    <button
      {...other}
      className={`${style.loading_normal} ${className}`}
    >
      {labels[0]}
    </button>
  );

  const busy: JSX.Element = ( // ロード中
    <button
      className={`${style.loading_busy} ${className} ${altClassName}`}
      onClick={() => {}}
    >
      {labels[1]}
    </button>
  );

  return (isLoading ? <>{busy}</> : <>{normal}</>);
};


