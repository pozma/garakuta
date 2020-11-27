import * as React from "react";
import { useState } from "react";
import * as CONST from "./../../constants";
import { Button } from "./../../../lib/index";
import style from "./exp.scss";

const delay = 5; // 状態の切替時間（sec）

const LoadingSample: React.FC<{}> = () => {

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

export const Buttons: React.FC<{}> = () => {

  return(
    <div className={style.wrapper}>
      <h1>ボタン</h1>
      <hr />

      <Button.Simple 
        label="しんぷるぼたん"
        onClick={() => {console.log("Button.Simpleがクリックされた")}}
      />

      <LoadingSample />

    </div>
  );
};

