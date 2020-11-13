import * as React from "react";
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";

import * as CONST from "./../constants.tsx";
// import Home from "./home.tsx";
import { Header } from "./header.tsx";

// // SCSS module import
// import header from "./../../scss/header.scss";
// import footer from "./../../scss/footer.scss";
// import button from "./../../scss/button.scss";
// import content from "./../../scss/content.scss";

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

  return(<p>あー？</p>);
};

// 全体の画面
export const App: React.FC<{}> = () => {


  return (
    <div>
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/garakuta"><Home /></Route>
        <Route path="/garakuta/sample1"><p>(っ＾ω＾c)</p></Route>
        <Route path="/garakuta/sample2"><p>わはー</p></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
};

