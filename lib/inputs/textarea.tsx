import * as React from "react";
import { useState, useEffect, useRef } from "react";
import c from "./textarea.scss";

// 高さ自動調節タイプ
export const AutoExpand: React.FCT<{}> = (props) => {
  const {className, ...other} = props; // rows プロパティは行数の初期値として扱う
  const textAreaRef = useRef<HTMLTextAreaElement>(null); // <textarea> への参照

  // 高さ調節の effect
  useEffect(() => {
    if (textAreaRef.current?.value.length === 0) { // value が空のとき
      textAreaRef.current!.rows = props.rows ?? 1; // 行数を初期値（なければ 1）に
    } else {
      // scrollHeight が実際の高さ
      // offsetHeight が見えてる高さ
      while (textAreaRef.current!.scrollHeight > textAreaRef.current!.offsetHeight) {
        // 実際の高さのほうが高い間は行数をインクリメントし続ける
        textAreaRef.current!.rows += 1;
      }
    }
  }, [textAreaRef.current?.value]) // <textarea> の値変更で effect 発火

  return (
    <textarea 
      ref={textAreaRef}
      className={`${c.autoexpand} ${className}`}
      {...other} // rows も（あれば）ここで（初期行数として）適用される
    />
  )
};

