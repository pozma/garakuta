import * as React from "react";
import { useState } from "react";
import * as CONST from "./../../constants";
import { Samples } from "../sample";
import { Button } from "./../../../lib/index";
import style from "./view.scss";

const delay = 4; // 状態の切替時間（sec）

// ただのボタン
const SimpleButtonSample: React.FC<{}> = () => {
  return(
    <Button.Simple 
      label="しんぷるぼたん" // JSXも可
      onClick={() => {console.log("Button.Simple がクリックされた")}}
      className={style.simpleButtonSample} // 追加のスタイル指定（オプション）
    />
  );
};


// 「ロード中」をもつボタン
const LoadingButtonSample: React.FC<{}> = () => {

  const [isLoading, setIsLoading] = useState(false); // true ならロード中
  const onClick = () => {
    console.log("Button.Loadingがクリックされた")
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, delay * 1000);
  };

  return(
    <Button.Loading 
      labels={["通常時", "ロード中..."]} // JSXも可
      isLoading={isLoading}
      onClick={onClick}
      className={style.loadingButtonSample} // 追加のスタイル指定（オプション）
      altClassName={style.loadingButtonSampleAlt} // ロード時の追加スタイル（オプション）
    />
  );
};


// サンプルリスト
const buttonList = [
  {
    title: "Button.Simple", 
    desc: <p>何の変哲もないただのボタン</p>, 
    comp: <SimpleButtonSample />,
    code: String.raw`const SimpleButtonSample: React.FC<{}> = () => {
  return(
    <Button.Simple 
      label="しんぷるぼたん" // JSXも可
      onClick={() => {console.log("Button.Simple がクリックされた")}}
      className={style.simpleButtonSample} // 追加のスタイル指定（オプション）
    />
  );
};`, //` シンタックスのバグ避け
  },

  {
    title: "Button.Loading", 
    desc: <>
      <p>通常時とロード時とで外観が変化するボタン</p>
      <p>ロード中はクリックできなくなる</p>
    </>, 
    comp: <LoadingButtonSample />,
    code: String.raw`const LoadingButtonSample: React.FC<{}> = () => {

  const [isLoading, setIsLoading] = useState(false); // true ならロード中
  const onClick = () => {
    console.log("Button.Loading がクリックされた")
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, delay * 1000);
  };

  return(
    <Button.Loading 
      labels={["通常時", "ロード中..."]} // JSXも可
      isLoading={isLoading}
      onClick={onClick}
      className={style.loadingButtonSample} // 追加のスタイル指定（オプション）
      altClassName={style.loadingButtonSampleAlt} // ロード時の追加スタイル（オプション）
    />
  );
};`, //` シンタックスのバグ避け
  },
];


export const Buttons: React.FC<{}> = () => {

  return(
    <div className={style.wrapper}>
      <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js" />
      <h1>ボタン</h1>
      <hr />
      <Samples sampleList={buttonList} />
    </div>
  );
};

