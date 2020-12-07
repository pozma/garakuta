import * as React from "react";
import * as CONST from "./../../constants";
import { Samples } from "../sample";
import style from "./view.scss";

const loaderList = [
  {
    title: "Loader.Circles", 
    desc: <p>おほー</p>,
    comp: <div className={style.circles} />,
    code: // {{{
      String.raw`.circles {
  @include loader-circles($duration: 1.0s, $color: black, $size: 10px);
}
`, //` }}}
  },
];

export const Loaders: React.FC<{}> = () => {

  const imp = String.raw`@use "~garakuta/lib/index" as *;`;

  return(
    <div className={style.wrapper}>
      <h1>ローダー（SCSS）</h1>
      <hr />
      <div className={style.desc}>
        <pre className="prettyprint lang-css linenums">{imp}</pre>
      </div>
      <Samples sampleList={loaderList} lang="css" />
    </div>
  );
};

