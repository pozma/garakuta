import * as React from "react";
import { useHistory } from "react-router-dom";
import * as CONST from "./../constants";
import style from "./home.scss";

export const Home: React.FC<{}> = () => {

  // URL 直叩きからのリダイレクトか判定
  const redirect = sessionStorage.getItem("redirect");
  if (redirect) {
    for (const location of CONST.LOCATIONS) {
      if (redirect === location) { // 404 で保存された値がページ URL と一致
        const history = useHistory();
        history.push(CONST.REPO + redirect); // SPA 側での URL セット
      };
    }
    sessionStorage.removeItem("redirect"); // ストレージから値削除
  }

  const imp = String.raw`{
  "dependencies": {
    "garakuta": "https://github.com/pozma/garakuta.git",
    ...
  },
  ...
}`;

  return(
    <div className={style.home}>
      <section>
        <h1>なにこれ</h1>
        <hr />
        <p>わはーの手作りUIコンポーネント集です</p>
        <p>未熟な職人わはーがひとつひとつ適当に手作りしています</p>
        <p>React＋SCSS用</p>
      </section>

      <section>
        <h1>インストール</h1>
        <hr />
        <p><code>package.json</code> に以下を記述して <code>npm install</code></p>
        <pre>{imp}</pre>
      </section>

      <section>
        <h1>ライセンス</h1>
        <hr />
        <p>MIT License</p>
      </section>
    </div>
  );
};

