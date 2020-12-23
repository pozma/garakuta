import * as React from "react";
import { useState } from "react";
import * as CONST from "./../../constants";
import { Samples } from "../sample";
import { Textarea } from "./../../../lib/index";
import style from "./view.scss";


const ExpandTextareaSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");

  return(
    <Textarea.Expand 
      value={value}
      onChange={e => setValue(e.target.value)}
      rows={3} // 高さ（行数）の初期値（なければ 1 になる）
      className={style.textareaSample} // 追加のスタイル指定
    />
  );
};


// サンプルリスト
const sampleList = [

  {
    title: "Textarea.Expand", 
    desc: <><p>複数行入力の箱タイプ</p><p>自動で高さ調節が入る</p></>,
    comp: <ExpandTextareaSample />,
    code:
    // {{{
      String.raw`const ExpandTextareaSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");

  return(
    <Textarea.Expand 
      value={value}
      onChange={e => setValue(e.target.value)}
      rows={3} // 高さ（行数）の初期値（なければ 1 になる）
      className={style.textareaSample} // 追加のスタイル指定
    />
  );
};`, //` シンタックスのバグ避け
    // }}}
  },

];


// 表示
export const Textareas: React.FC<{}> = () => {

  const imp = String.raw`import { Textarea } from "garakuta";`;
  return(
    <div className={style.wrapper}>
      <h1>入力欄</h1>
      <hr />
      <div className={style.desc}>
        <pre className="prettyprint lang-js linenums">{imp}</pre>
      </div>
      <Samples sampleList={sampleList} lang="js" />
    </div>
  );

};

