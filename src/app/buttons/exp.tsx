import * as React from "react";
import { useState } from "react";
import * as CONST from "./../../constants";
import { Button } from "./../../../lib/index";
import style from "./exp.scss";

export const Buttons: React.FC<{}> = () => {

  return(
    <>
      <h1>ボタン</h1>
      <hr />
      <Button.Simple 
        label="しんぷるぼたん"
        onClick={() => {console.log("clicked")}}
        className={style.simple}
      />
    </>
  );
};

