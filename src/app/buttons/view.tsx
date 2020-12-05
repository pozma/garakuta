import * as React from "react";
import { useState } from "react";
import * as CONST from "./../../constants";
import { Samples } from "../sample";
import { Button } from "./../../../lib/index";
import style from "./view.scss";

const delay = 4; // 状態の切替時間（sec）

// ただのボタン
const Simple: React.FC<{}> = () => {
  return(
    <Button.Simple 
      label="しんぷるぼたん"
      onClick={() => {console.log("Button.Simpleがクリックされた")}}
    />
  );
};


// 「ロード中」をもつボタン
const Loading: React.FC<{}> = () => {

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
      labels={["通常", "ロード中"]}
      isLoading={isLoading}
      onClick={onClick}
    />
  );
};


// サンプルリスト
const buttonList = [
  {
    title: "Button.Simple", 
    desc: <p>何の変哲もないただのボタン</p>, 
    comp: <Simple />,
    code: String.raw`const Simple: React.FC<{}> = () => {
  return(
    <Button.Simple 
      label="しんぷるぼたん"
      onClick={() => {console.log("Button.Simpleがクリックされた")}}
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
    comp: <Loading />,
    code: String.raw`const Loading: React.FC<{}> = () => {

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
      labels={["通常", "ロード中"]}
      isLoading={isLoading}
      onClick={onClick}
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

