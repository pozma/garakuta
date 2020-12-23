import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import * as CONST from "./../constants";
import { Home } from "./home";
import { Buttons } from "./buttons/view";
import { Inputs } from "./inputs/view";
import { Textareas } from "./textareas/view";
import { Modals } from "./modals/view";
import { Loaders } from "./loaders/view";
import style from "./view.scss";


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
          <li><Link to={CONST.REPO + CONST.LOCATION_URL_INPUTS}>入力欄（一行）</Link></li>
          <li><Link to={CONST.REPO + CONST.LOCATION_URL_TEXTAREAS}>入力欄（複数行）</Link></li>
          <li><Link to={CONST.REPO + CONST.LOCATION_URL_MODALS}>モーダル</Link></li>
          <li><Link to={CONST.REPO + CONST.LOCATION_URL_LOADERS}>ローダー</Link></li>
        </ul>
      </nav>

      <main>
        <Switch>
          <Route exact path={CONST.REPO + CONST.LOCATION_URL_HOME}><Home /></Route>
          <Route path={CONST.REPO + CONST.LOCATION_URL_BUTTONS}><Buttons /></Route>
          <Route path={CONST.REPO + CONST.LOCATION_URL_INPUTS}><Inputs /></Route>
          <Route path={CONST.REPO + CONST.LOCATION_URL_TEXTAREAS}><Textareas /></Route>
          <Route path={CONST.REPO + CONST.LOCATION_URL_MODALS}><Modals /></Route>
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
