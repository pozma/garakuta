import * as React from "react";
import style from "./sample.scss";

// サンプル一覧の表示用
export const Samples: React.FC<{
  sampleList: {
    title: string;
    desc: JSX.Element;
    comp: JSX.Element;
    code: string;
  }[];
}> = (props) => {

  return(
    <>
      {props.sampleList.map((e, i) => {
        return(
          <div key={i} className={style.item}>
            <h2>{e.title}</h2>
            <div className={style.flex}>
              <div className={style.desc}>{e.desc}</div>
              <div className={style.sample}>{e.comp}</div>
            </div>
            <details>
              <summary>サンプルコード</summary>
              <pre className="prettyprint lang-js linenums">{e.code}</pre>
            </details>
          </div>
        );
      })}
    </>
  );
};

