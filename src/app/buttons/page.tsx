import * as React from "react";
import { useState } from "react";
import * as CONST from "./../../constants";
import * as StateButton from "./../../../lib/buttons/state";

// SCSS module import
import style from "./page.scss";

const LoadingButtonContainer: React.FC<{}> = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const handleClick = (e: React.SyntheticEvent) => {
    // TODO
  };

  return(
    <div className={style.container}>
      <h2>たいとる</h2>
      <p className={style.desc}>説明</p>
      <div className={style.sample}>
        <StateButton.LoadButton 
        label={["on", "loading"]}
        loading={loading}
        onClick={handleClick}
        style={style} />
      </div>
    </div>
  );
};

export const Buttons: React.FC<{}> = () => {


  return(
    <>
      <h1>ボタン</h1>
      <hr />

      <div className={style.gallery}>
        <LoadingButtonContainer />
        <LoadingButtonContainer />
        <LoadingButtonContainer />
        <LoadingButtonContainer />
        <LoadingButtonContainer />
      </div>
    </>
  );
};

