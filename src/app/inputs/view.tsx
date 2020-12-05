import * as React from "react";
import { useState, useEffect } from "react";
import * as CONST from "./../../constants";
import { Samples } from "../sample";
import { Input } from "./../../../lib/index";
import style from "./view.scss";

// 単純な１行入力
const SimpleInputSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Text.Simple 
      label="しんぷるいんぷっと" // JSXも可
      value={value}
      onChange={e => setValue(e.target.value)}
      onFocus={e => {}} // フォーカス時の挙動（option）
      onBlur={e => {}} // アンフォーカス時の挙動（option）
      className={style.simple} // 追加のスタイル指定（option）
    />
  );
};


// プレースホルダーにラベルを表示するタイプ
const PlaceholderInputSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  const [alert, setAlert] = useState("");
  const wrongInputAlert = "使用できない文字が含まれています！";
  useEffect(() => { // 入力値のチェック
    setAlert(!value.match(/^[A-Za-z0-9_]*$/) ? wrongInputAlert : "");
  }, [value]);
  return(
    <Input.Text.Placeholder 
      label="USERNAME" // JSXも可
      placeholder="A-Z, a-z, 0-9, _ が使えます" // これはstringのみ
      alert={alert} // JSXも可
      value={value}
      onChange={e => setValue(e.target.value)}
      onFocus={e => {}} // フォーカス時の挙動（option）
      onBlur={e => {}} // アンフォーカス時の挙動（option）
      className={style.placeholder} // 追加のスタイル指定（option）
    />
  );
};


// サンプルリスト
const inputList = [
  {
    title: "Input.Text.Simple", 
    desc: <p>１行入力用の単純な箱</p>, 
    comp: <SimpleInputSample />,
    code:
    // {{{
      String.raw`const SimpleInputSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Text.Simple 
      label="しんぷるいんぷっと" // JSXも可
      value={value}
      onChange={e => setValue(e.target.value)}
      onFocus={e => {}} // フォーカス時の挙動（option）
      onBlur={e => {}} // アンフォーカス時の挙動（option）
      className={style.simple} // 追加のスタイル指定（option）
    />
  );
};`, //` シンタックスのバグ避け
    // }}}
  },

  {
    title: "Input.Text.Placeholder", 
    desc: <><p>プレースホルダーになんか表示するタイプの１行入力</p><p>メッセージ（アラート）表示欄付き</p></>,
    comp: <PlaceholderInputSample />,
    code:
    // {{{
      String.raw`const PlaceholderInputSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  const [alert, setAlert] = useState("");
  const wrongInputAlert = "使用できない文字が含まれています！";
  useEffect(() => { // 入力値のチェック
    setAlert(!value.match(/^[A-Za-z0-9_]*$/) ? wrongInputAlert : "");
  }, [value]);
  return(
    <Input.Text.Placeholder 
      label="USERNAME" // JSXも可
      placeholder="A-Z, a-z, 0-9, _ が使えます" // これはstringのみ
      alert={alert} // JSXも可
      value={value}
      onChange={e => setValue(e.target.value)}
      onFocus={e => {}} // フォーカス時の挙動（option）
      onBlur={e => {}} // アンフォーカス時の挙動（option）
      className={style.placeholder} // 追加のスタイル指定（option）
    />
  );
};`, //` シンタックスのバグ避け
    // }}}
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

