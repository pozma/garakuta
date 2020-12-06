import * as React from "react";
import style from "./basic.scss";

// 何の変哲もないただのボタン
export const Simple: React.FCXB<{}> = (props) => {

  const {className, ...other} = props;
  return (
    <button
      {...other}
      className={`${style.simple} ${className}`}
    >
      {props.children}
    </button>
  );
};


// 通常とロード中の状態を持つボタン（ロード中は押せない）
export const Loading: React.FCXB<{
  isLoading: boolean; // true -> ロード中
  altClassName?: string; // ロード中のみ適用するスタイル
}> = (props) => {

  const {className, isLoading, altClassName, ...other} = props;

  const normal: JSX.Element = ( // 通常状態
    <button
      {...other}
      className={`${style.loading_normal} ${className}`}
    >
      {props.children}
    </button>
  );

  const busy: JSX.Element = ( // ロード中
    <button
      className={`${style.loading_busy} ${className} ${altClassName}`}
      onClick={() => {}}
    >
      {props.children}
    </button>
  );

  return (isLoading ? <>{busy}</> : <>{normal}</>);
};


