import * as React from "react";
import { useState, useRef, Suspense } from "react";
import { Link } from "react-router-dom";

import * as CONST from "./../constants.tsx";

// // SCSS module import
import header from "./../scss/header.scss";


export const Header: React.FC<{}> = () => {

  return(
    <div className={header.wrapper}>
      <div className={header.container}>
        <Link // タイトルロゴ
        className={header.link}
        to={CONST.LOCATION_URL_HOME}>
          <h1>Garakuta QuartZ</h1>
        </Link>

        <ul // ナビゲーション
        className={header.nav}>
          <li><Link to={CONST.REPO + CONST.LOCATION_URL_SAMPLE1}>About</Link></li>
          <li><Link to={CONST.REPO + CONST.LOCATION_URL_SAMPLE2}>WAHA</Link></li>
        </ul>
      </div>
    </div>
  );

};

