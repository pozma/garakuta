import * as React from "react";
import { useState } from "react";
import * as CONST from "./../../constants";
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
      labels={[<p>通常</p>, <p>ロード中</p>]}
      isLoading={isLoading}
      onClick={onClick}
    />
  );
};

const buttonList = [
  {
    title: "Button.Simple", 
    desc: "何の変哲もないただのボタン．", 
    comp: <Simple />,
  },
  {
    title: "Button.Loading", 
    desc: "ロード中で外観が変化するボタン．ロード中はクリックできなくなる．", 
    comp: <Loading />,
  },
];

export const Buttons: React.FC<{}> = () => {

  return(
    <div className={style.wrapper}>
      <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js" />
      <h1>ボタン</h1>
      <hr />

      {buttonList.map((e, i) => {
        return(
          <div key={i} className={style.entry}>
            <h2>{e.title}</h2>
            <p>{e.desc}</p>
            {e.comp}
          </div>
        );
      })}

    </div>
  );
};

