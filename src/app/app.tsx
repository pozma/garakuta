import * as React from "react";
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";

import * as CONST from "./../constants";

// SCSS module import
import style from "./app.scss";

const Home: React.FC<{}> = () => {

  // URL 直叩きからのリダイレクトか判定
  const redirect = sessionStorage.getItem("redirect");
  if (redirect) {
    for (const location of CONST.LOCATIONS) {
      if (redirect === location) { // 404 で保存された値がページ URL と一致
        const history = useHistory();
        history.push(CONST.REPO + redirect); // SPA 側での URL セット
      };
    }
    sessionStorage.removeItem("redirect");
  }

  return(<p>ほーむ</p>);
};

// 全体の画面
export const App: React.FC<{}> = () => {

  return (
    <>
    <BrowserRouter>
      <header>
        <Link // タイトルロゴ
        className={style.link}
        to={CONST.REPO + CONST.LOCATION_URL_HOME}>
          <h1>がらくた</h1>
        </Link>
      </header>

      <article>
        <div // ナビゲーションバー（左側のやつ）
        className={style.nav}>
          <ul>
            <li><Link to={CONST.REPO + CONST.LOCATION_URL_SAMPLE1}>さんぷる１</Link></li>
            <li><Link to={CONST.REPO + CONST.LOCATION_URL_SAMPLE2}>さんぷる２</Link></li>
          </ul>
        </div>

        <div // メインのビュワー
        className={style.main}>
          <Switch>
            <Route exact path="/garakuta"><Home /></Route>
            <Route path="/garakuta/sample1"><p>わはー</p></Route>
            <Route path="/garakuta/sample2"><p>おほー</p></Route>
          </Switch>
        </div>
      </article>
    </BrowserRouter>
    </>
  );
};

