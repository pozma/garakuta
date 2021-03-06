import * as React from "react";
import { useState } from "react";
import * as CONST from "./../../constants";
import { Samples } from "../sample";
import { Select } from "./../../../lib/index";
import c from "./view.scss";


const SimpleSelectSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  const [isInit, setIsInit] = useState(true); // true で初期状態を表す

  const placeholder = <p className={c.placeholder}>{"１匹選んでね"}</p>;
  const options = ["みみつき", "みみずれ", "みみなし"].map((elem, i) => {
    return (
      <li 
        key={i}
        onClick={() => {setIsInit(false); setValue(elem);}} // 各候補クリック
      >
        {elem}
      </li>
    );
  });

  return(
    <Select.Simple 
      status={!isInit ? <p>{value}</p> : placeholder} // セレクタ欄内に表示する JSX
      onClick={() => {setIsInit(true); setValue("");}} // セレクタ欄クリックの挙動
      className={c.selectSample} // 追加のスタイル指定
    >
      {options}
    </Select.Simple>
  );
};


// サンプルリスト
const sampleList = [

  {
    title: "Select.Simple", 
    desc: <>
      <p>シンプルなセレクタ</p>
      <p>select は挙動がクソなので ul で実装</p>
      <p>div &gt; ul の１つ目の li に「１匹選んでね」が</p>
      <p>２つ目の li に候補リスト表示用の ul が格納されている</p>
    </>,
    comp: <SimpleSelectSample />,
    code:
    // {{{
      String.raw`const SimpleSelectSample: React.FC<{}> = () => {

  const [value, setValue] = useState("");
  const [isInit, setIsInit] = useState(true); // true で初期状態を表す

  const placeholder = <p className={c.placeholder}>{"１匹選んでね"}</p>;
  const options = ["みみつき", "みみずれ", "みみなし"].map((elem, i) => {
    return (
      <li 
        key={i}
        onClick={() => {setIsInit(false); setValue(elem);}} // 各候補クリック
      >
        {elem}
      </li>
    );
  });

  return(
    <Select.Simple 
      status={!isInit ? <p>{value}</p> : placeholder} // セレクタ欄内に表示する JSX
      onClick={() => {setIsInit(true); setValue("");}} // セレクタ欄クリックの挙動
      className={c.selectSample} // 追加のスタイル指定
    >
      {options}
    </Select.Simple>
  );
};`, //` シンタックスのバグ避け
    // }}}
  },

];


// 表示
export const Selects: React.FC<{}> = () => {

  const imp = String.raw`import { Selects } from "garakuta";`;
  return(
    <div className={c.wrapper}>
      <h1>入力欄</h1>
      <hr />
      <div className={c.desc}>
        <pre className="prettyprint lang-js linenums">{imp}</pre>
      </div>
      <Samples sampleList={sampleList} lang="js" />
    </div>
  );

};

