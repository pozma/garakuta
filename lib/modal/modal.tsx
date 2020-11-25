import * as React from 'react';
import { useState } from 'react';
// SCSS module import
import style from "./../../scss/comps/modal.scss";
// icon, animation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// 確認のためのモーダルウィンドウ
// YES or NO ボタンが付く
export const Confirmation: React.FC<{
  desc: JSX.Element; // 説明文
  continue: () => void; // 実行時の処理
  continueLabel: JSX.Element; // ボタンのラベル
  cancel: () => void; // キャンセル時の処理
  cancelLabel: JSX.Element; // ボタンのラベル
}> = (props) => {

  return (
    <>
      <div // 背景オーバーレイ
      className={style.mask} />

      <div // 本体部分
      className={style.container}>
        <div // 説明文
        className={style.desc}>{props.desc}</div>

        <div // ボタン表示部分
        className={style.buttons}>
          <button // キャンセル
          onClick={props.cancel}>
            {props.cancelLabel}
          </button>

          <button // 実行
          onClick={props.continue}>
            {props.continueLabel}
          </button>
        </div>
      </div>
    </>
  );
};


// 確認のためのモーダルウィンドウ
// YES or NO ボタンにさらにパスワード入力が付く
export const ConfirmationWithPassword: React.FC<{
  desc: JSX.Element; // 説明文
  continue: (password: string) => void; // 実行時の処理
  continueLabel: JSX.Element; // ボタンのラベル
  cancel: () => void; // キャンセル時の処理
  cancelLabel: JSX.Element; // ボタンのラベル
}> = (props) => {

  // state def
  const [password, setPassword] = useState(""); // 入力パスワード
  const [masked, setMasked] = useState(true); // パスワードの表示/非表示

  return (
    <>
      <div // 背景オーバーレイ
      className={style.mask} />

      <div // 本体部分
      className={style.container}>

        <div // 説明文
        className={style.desc}>{props.desc}</div>

        <input // パスワード入力フォーム
          name="password"
          type={masked ? "password" : "text"} // 表示/非表示切替
          value={password} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value);}} 
        />

        <div // ボタン表示部分
        className={style.buttons}>
          <button // キャンセル
          onClick={props.cancel}>
            {props.cancelLabel}
          </button>

          <button // 実行
          onClick={() => props.continue(password)}>
            {props.continueLabel}
          </button>
        </div>
      </div>
    </>
  );
};
