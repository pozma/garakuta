import * as React from "react";
import { useState, useEffect } from "react";
import * as CONST from "./../../constants";
import { Samples } from "../sample";
import { Input } from "./../../../lib/index";
import style from "./view.scss";


// 単純な１行入力
const SimpleTextSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Text.Simple 
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.simple} // 追加のスタイル指定（option）
    />
  );
};

// ラベル付き
const LabeledTextSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Text.Labeled 
      label="らべる" // JSXも可
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.labeled} // 追加のスタイル指定（option）
    />
  );
};


// プレースホルダーにラベルを表示するタイプ
const PlaceholderTextSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  const [alert, setAlert] = useState("");
  const inputAlert = "使用できない文字が含まれています！";
  useEffect(() => { // 入力値のチェック
    setAlert(!value.match(/^[A-Za-z0-9_]*$/) ? inputAlert : "");
  }, [value]);
  return(<>
    <Input.Text.Placeholder 
      label="USERNAME" // JSXも可
      placeholder="A-Z, a-z, 0-9, _ が使えます" // これはstringのみ
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.placeholder} // 追加のスタイル指定（option）
      type="password"
    />
    <div className={style.alert}>{alert}</div>
  </>);
};


// パスワード入力の箱
const SimplePasswordSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Password.Simple 
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.simple} // 追加のスタイル指定（option）
    />
  );
};


// ラベル付き
const LabeledPasswordSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Password.Labeled 
      label="ぱすわーど" // JSXも可
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.labeled} // 追加のスタイル指定（option）
    />
  );
};


// プレースホルダーにラベルを表示するタイプ
const PlaceholderPasswordSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  const [alert, setAlert] = useState("");
  const inputAlert = "パスワードが短すぎます！";
  const validate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value.length > 0 && value.length < 5) {
      setAlert(inputAlert);
    };
  };
  return(<>
    <Input.Password.Placeholder 
      label="PASSWORD" // JSXも可
      placeholder="5文字以上必要です" // これはstringのみ
      value={value}
      onChange={e => setValue(e.target.value)}
      onFocus={e => setAlert("")} // フォーカス時
      onBlur={validate} // アンフォーカス時
      className={style.placeholder} // 追加のスタイル指定（option）
    />
    <div className={style.alert}>{alert}</div>
  </>);
};


// サンプルリスト
const inputList = [
  {
    title: "Input.Text.Simple", 
    desc: <p>単純な１行入力の箱</p>, 
    comp: <SimpleTextSample />,
    code:
    // {{{
      String.raw`const SimpleTextSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Text.Simple 
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.simple} // 追加のスタイル指定（option）
    />
  );
};`, //` シンタックスのバグ避け
    // }}}
  },

  {
    title: "Input.Text.Labeled", 
    desc: <p>ラベル付きの箱</p>, 
    comp: <LabeledTextSample />,
    code:
    // {{{
      String.raw`const LabeledTextSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Text.Labeled 
      label="らべる" // JSXも可
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.labeled} // 追加のスタイル指定（option）
    />
  );
};`, //` シンタックスのバグ避け
    // }}}
  },

  {
    title: "Input.Text.Placeholder", 
    desc: <><p>プレースホルダーになんか表示するタイプ</p><p>（アラートは別売り）</p></>,
    comp: <PlaceholderTextSample />,
    code:
    // {{{
      String.raw`const PlaceholderTextSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  const [alert, setAlert] = useState("");
  const inputAlert = "使用できない文字が含まれています！";
  useEffect(() => { // 入力値のチェック
    setAlert(!value.match(/^[A-Za-z0-9_]*$/) ? inputAlert : "");
  }, [value]);
  return(<>
    <Input.Text.Placeholder 
      label="USERNAME" // JSXも可
      placeholder="A-Z, a-z, 0-9, _ が使えます" // これはstringのみ
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.placeholder} // 追加のスタイル指定（option）
    />
    <div className={style.alert}>{alert}</div>
  </>);
};`, //` シンタックスのバグ避け
    // }}}
  },

  {
    title: "Input.Password.Simple", 
    desc: <p>パスワード入力用の箱</p>,
    comp: <SimplePasswordSample />,
    code:
    // {{{
      String.raw`const SimplePasswordSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Password.Simple 
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.simple} // 追加のスタイル指定（option）
    />
  );
};`, //` シンタックスのバグ避け
    // }}}
  },

  {
    title: "Input.Password.Labeled", 
    desc: <p>ラベル付きの箱</p>,
    comp: <LabeledPasswordSample />,
    code:
    // {{{
      String.raw`const LabeledPasswordSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Password.Labeled 
      label="ぱすわーど" // JSXも可
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.labeled} // 追加のスタイル指定（option）
    />
  );
};`, //` シンタックスのバグ避け
    // }}}
  },

  {
    title: "Input.Password.Placeholder", 
    desc: <><p>プレースホルダーになんか表示するタイプ</p><p>（アラートは別売り）</p></>,
    comp: <PlaceholderPasswordSample />,
    code:
    // {{{
      String.raw`const PlaceholderPasswordSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  const [alert, setAlert] = useState("");
  const inputAlert = "パスワードが短すぎます！";
  const validate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value.length > 0 && value.length < 5) {
      setAlert(inputAlert);
    };
  };
  return(<>
    <Input.Password.Placeholder 
      label="PASSWORD" // JSXも可
      placeholder="5文字以上必要です" // これはstringのみ
      value={value}
      onChange={e => setValue(e.target.value)}
      onFocus={e => setAlert("")} // フォーカス時
      onBlur={validate} // アンフォーカス時
      className={style.placeholder} // 追加のスタイル指定（option）
    />
    <div className={style.alert}>{alert}</div>
  </>);
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

