import * as React from "react";
import * as CONST from "./../../constants";

// SCSS module import
import style from "./exp.scss";

export const Loaders: React.FC<{}> = () => {

  return(
    <div className={style.wrapper}>
      <h1>ろーだー</h1>
      <hr />
      <div className={style.circles} />
    </div>
  );
};

