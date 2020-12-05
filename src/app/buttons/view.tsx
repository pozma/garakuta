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
      className={style.simple} // 追加のスタイル指定（オプション）
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
      className={style.loading} // 追加のスタイル指定（option）
      altClassName={style.loadingAlt} // ロード中での追加スタイル（option）
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
      className={style.simple} // 追加のスタイル指定（option）
    />
  );
};`, //` シンタックスのバグ避け
  },

  {
    title: "Button.Loading", 
    desc: <>
      <p>通常時とロード中とで外観が変化するボタン</p>
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
      className={style.loading} // 追加のスタイル指定（option）
      altClassName={style.loadingAlt} // ロード中での追加スタイル（option）
    />
  );
};`, //` シンタックスのバグ避け
  },
];


// 表示
export const Buttons: React.FC<{}> = () => {

  const imp = String.raw`import { Button } from "garakuta";`;
  return(
    <div className={style.wrapper}>
      <h1>ボタン</h1>
      <hr />
      <div className={style.desc}>
        <pre className="prettyprint lang-js linenums">{imp}</pre>
      </div>
      <Samples sampleList={buttonList} />
    </div>
  );

};

