import * as React from "react";
import { useState, useEffect } from "react";
import * as CONST from "./../../constants";
import { Samples } from "../sample";
import { Input } from "./../../../lib/index";
import style from "./view.scss";


const BoxTextSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");

  return(
    <Input.Text.Box 
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.textInputSample} // 追加のスタイル指定
    />
  );
};


const UnderlineTextSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  const [alert, setAlert] = useState("");
  const inputAlert = "使用できない文字が含まれています！";

  useEffect(() => { // 入力値のチェック
    setAlert(!value.match(/^[A-Za-z0-9_]*$/) ? inputAlert : "");
  }, [value]);

  return(
    <label>
      <p className={style.label}>{"Username"}</p>
      <Input.Text.Underline 
        placeholder="A-Z, a-z, 0-9, _ が使えます"
        value={value}
        onChange={e => setValue(e.target.value)}
        className={style.textInputSample} // 追加のスタイル指定
      />
      <p className={style.alert}>{alert}</p>
    </label>
  );
};


const BoxPasswordSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");

  return(
    <Input.Password.Box 
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.textInputSample} // 追加のスタイル指定
    />
  );
};


const UnderlinePasswordSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  const [alert, setAlert] = useState("");
  const inputAlert = "パスワードが短すぎます！";

  const validate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value.length > 0 && value.length < 5) {
      setAlert(inputAlert);
    };
  };

  return(
    <label>
      <p className={style.label}>{"Password"}</p>
      <Input.Password.Underline 
        placeholder="5文字以上必要です"
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={e => setAlert("")} // フォーカス時
        onBlur={validate} // アンフォーカス時
        className={style.textInputSample} // 追加のスタイル指定
      />
      <p className={style.alert}>{alert}</p>
    </label>
  );
};


const AutoExpandTextAreaSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");

  return(
    <Input.TextArea.AutoExpand 
      value={value}
      onChange={e => setValue(e.target.value)}
      rows={3} // 高さ（行数）の初期値（なければ 1 になる）
      className={style.textInputSample} // 追加のスタイル指定
    />
  );
};


// サンプルリスト
const inputList = [
  {
    title: "Input.Text.Box", 
    desc: <p>箱タイプ</p>,
    comp: <BoxTextSample />,
    code:
    // {{{
      String.raw`const BoxTextSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Text.Box 
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.textInputSample} // 追加のスタイル指定
    />
  );
};`, //` シンタックスのバグ避け
    // }}}
  },

  {
    title: "Input.Text.Underline", 
    desc: <p>下線タイプ</p>,
    comp: <UnderlineTextSample />,
    code:
    // {{{
      String.raw`const UnderlineTextSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  const [alert, setAlert] = useState("");
  const inputAlert = "使用できない文字が含まれています！";

  useEffect(() => { // 入力値のチェック
    setAlert(!value.match(/^[A-Za-z0-9_]*$/) ? inputAlert : "");
  }, [value]);

  return(
    <label>
      <p className={style.label}>{"Username"}</p>
      <Input.Text.Underline 
        placeholder="A-Z, a-z, 0-9, _ が使えます"
        value={value}
        onChange={e => setValue(e.target.value)}
        className={style.textInputSample} // 追加のスタイル指定
      />
      <p className={style.alert}>{alert}</p>
    </label>
  );
};`, //` シンタックスのバグ避け
    // }}}
  },

  {
    title: "Input.Password.Box", 
    desc: <p>箱タイプ</p>,
    comp: <BoxPasswordSample />,
    code:
    // {{{
      String.raw`const BoxPasswordSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  return(
    <Input.Password.Box 
      value={value}
      onChange={e => setValue(e.target.value)}
      className={style.textInputSample} // 追加のスタイル指定
    />
  );
};`, //` シンタックスのバグ避け
    // }}}
  },

  {
    title: "Input.Password.Underline", 
    desc: <p>下線タイプ</p>,
    comp: <UnderlinePasswordSample />,
    code:
    // {{{
      String.raw`const UnderlinePasswordSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  const [alert, setAlert] = useState("");
  const inputAlert = "パスワードが短すぎます！";

  const validate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value.length > 0 && value.length < 5) {
      setAlert(inputAlert);
    };
  };

  return(
    <label>
      <p className={style.label}>{"Password"}</p>
      <Input.Password.Underline 
        placeholder="5文字以上必要です"
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={e => setAlert("")} // フォーカス時
        onBlur={validate} // アンフォーカス時
        className={style.textInputSample} // 追加のスタイル指定
      />
      <p className={style.alert}>{alert}</p>
    </label>
  );
};`, //` シンタックスのバグ避け
    // }}}
  },

  {
    title: "Input.TextArea.AutoExpand", 
    desc: <><p>複数行入力の箱タイプ</p><p>自動で高さ調節が入る</p></>,
    comp: <AutoExpandTextAreaSample />,
    code:
    // {{{
      String.raw`const AutoExpandTextAreaSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");

  return(
    <Input.TextArea.AutoExpand 
      value={value}
      onChange={e => setValue(e.target.value)}
      rows={3} // 高さ（行数）の初期値（なければ 1 になる）
      className={style.textInputSample} // 追加のスタイル指定
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
      <h1>入力欄</h1>
      <hr />
      <div className={style.desc}>
        <pre className="prettyprint lang-js linenums">{imp}</pre>
      </div>
      <Samples sampleList={inputList} lang="js" />
    </div>
  );

};

