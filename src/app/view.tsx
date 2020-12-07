import * as React from "react";
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";

import * as CONST from "./../constants";
import { Buttons } from "./buttons/view";
import { Inputs } from "./inputs/view";
import { Loaders } from "./loaders/view";

// SCSS module import
import style from "./view.scss";

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

  return(
    <>
      <p>ほーむ</p>
    </>
  );
};

// 全体の画面
export const App: React.FC<{}> = () => {

  return (
    <div className={style.app}>
    <BrowserRouter>
      <header>
        <Link to={CONST.REPO + CONST.LOCATION_URL_HOME}><h1>garakuta</h1></Link>
        <a href={CONST.GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <p>{CONST.GITHUB_URL}</p>
        </a>
      </header>

      <nav>
        <ul>
          <li><Link to={CONST.REPO + CONST.LOCATION_URL_BUTTONS}>ボタン</Link></li>
          <li><Link to={CONST.REPO + CONST.LOCATION_URL_INPUTS}>入力欄</Link></li>
          <li><Link to={CONST.REPO + CONST.LOCATION_URL_MODALS}>モーダル</Link></li>
          <li><Link to={CONST.REPO + CONST.LOCATION_URL_LOADERS}>ローダー</Link></li>
        </ul>
      </nav>

      <main>
        <Switch>
          <Route exact path={CONST.REPO + CONST.LOCATION_URL_HOME}><Home /></Route>
          <Route path={CONST.REPO + CONST.LOCATION_URL_BUTTONS}><Buttons /></Route>
          <Route path={CONST.REPO + CONST.LOCATION_URL_INPUTS}><Inputs /></Route>
          <Route path={CONST.REPO + CONST.LOCATION_URL_MODALS}><p>あはー</p></Route>
          <Route path={CONST.REPO + CONST.LOCATION_URL_LOADERS}><Loaders /></Route>
        </Switch>
      </main>

      <footer>
        <p><small>&copy; 2020 わはー</small></p>
      </footer>
    </BrowserRouter>
    </div>
  );
};
