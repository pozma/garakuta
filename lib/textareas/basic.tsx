import * as React from "react";
import { useState, useEffect, useRef } from "react";
import c from "./basic.scss";

// 高さ自動調節タイプ
export const Expand: React.FCT<{}> = (props) => {
  const {id, className, ...other} = props; // rows プロパティは行数の初期値として扱う
  const textareaRef = useRef<HTMLTextAreaElement>(null); // <textarea> への参照

  // 高さ調節の effect
  useEffect(() => {
    if (textareaRef.current?.value.length === 0) { // value が空のとき
      textareaRef.current!.rows = props.rows ?? 1; // 行数を初期値（なければ 1）に
    } else {
      // scrollHeight が実際の高さ
      // offsetHeight が見えてる高さ
      while (textareaRef.current!.scrollHeight > textareaRef.current!.offsetHeight) {
        // 実際の高さのほうが高い間は行数をインクリメントし続ける
        textareaRef.current!.rows += 1;
      }
    }
  }, [textareaRef.current?.value]) // <textarea> の値変更で effect 発火

  return (
    <div className={`${c.expand} ${className}`} id={id}>
      <textarea 
        ref={textareaRef}
        {...other} // rows も（あれば）ここで（初期行数として）適用される
      />
    </div>
  )
};

