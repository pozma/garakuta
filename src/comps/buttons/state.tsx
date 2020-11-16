import * as React from "react";
// icon, animation
import Loader from "react-loader-spinner";

interface ClickEvent<T = HTMLElement> extends React.SyntheticEvent<T> {
};

// 通常とロード中の状態を持つボタン
// ロード中は押せない
export const LoadButton: React.FC<{
  label: [string, string]; // ["通常時のラベル", "ロード中のラベル"]
  loading: boolean; // true なら現在ロード中
  onClick: (e: React.SyntheticEvent) => void; // クリックハンドラ
  style: {[className: string]: string}; // 親コンポーネントご指定のスタイル
}> = (props) => {

  return (
    props.loading ? // 処理中か判定
      <button // ログイン処理中に送信ボタンの代わりに表示するやつ
      className={props.style.loading}>
        <div className={props.style.label}>
          <p>{props.label[1]}</p>
          <Loader // アニメーション
             type="Oval"
             color="#ffffff"
             height={16} // サイズは px で指定
             width={16}
          />
        </div>
      </button>
    : // ロード中ではない
      <button // 送信ボタン
      className={props.style.submit}
      onClick={props.onClick}>
        {props.label[0]}
      </button>
  );
};

