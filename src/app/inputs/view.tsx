import * as React from "react";
import { useState } from "react";
import * as CONST from "./../../constants";
import { Samples } from "../sample";
import { Input } from "./../../../lib/index";
import style from "./view.scss";

// 単純な１行入力
const SimpleInputSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Simple 
      label="しんぷるいんぷっと" // JSXも可
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={style.simple} // 追加のスタイル指定（オプション）
    />
  );
};


// プレースホルダーにラベルを表示するタイプ
const PlaceholderInputSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Placeholder 
      label="プレースホルダー付き入力" // JSXも可
      text="プレースホルダーのテキスト" // これはstringのみ
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={style.placeholder} // 追加のスタイル指定（オプション）
    />
  );
};


// サンプルリスト
const inputList = [
  {
    title: "Input.Simple", 
    desc: <p>１行入力用の単純な箱</p>, 
    comp: <SimpleInputSample />,
    code: String.raw`const SimpleInputSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Simple 
      label="しんぷるいんぷっと" // JSXも可
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={style.simple} // 追加のスタイル指定（オプション）
    />
  );
};`, //` シンタックスのバグ避け
  },

  {
    title: "Input.Placeholder", 
    desc: <p>プレースホルダーになんか表示するタイプの１行入力</p>, 
    comp: <PlaceholderInputSample />,
    code: String.raw`const PlaceholderInputSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Placeholder 
      label="プレースホルダー付き入力" // JSXも可
      text="プレースホルダーのテキスト" // これはstringのみ
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={style.placeholder} // 追加のスタイル指定（オプション）
    />
  );
};`, //` シンタックスのバグ避け
  },

];


// 表示
export const Inputs: React.FC<{}> = () => {

  const imp = String.raw`import { Input } from "garakuta";`;
  return(
    <div className={style.wrapper}>
      <h1>フォーム部品</h1>
      <hr />
      <div className={style.desc}>
        <pre className="prettyprint lang-js linenums">{imp}</pre>
      </div>
      <Samples sampleList={inputList} />
    </div>
  );

};

