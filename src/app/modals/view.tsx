import * as React from "react";
import { useState } from "react";
import * as CONST from "./../../constants";
import { Modal, Button } from "./../../../lib/index";
import { Samples } from "../sample";
import style from "./view.scss";

const SimpleModalSample: React.FC<{}> = () => {

  const [open, setOpen] = useState(false); // trueでモーダルを表示

  return (<>
    <Button.Simple
      onClick={e => setOpen(true)}
    >
      <p>モーダルを表示</p>
    </Button.Simple>
    {open && 
      <Modal.Simple 
        onClick={e => setOpen(false)} // マスクをクリックしたときの挙動
      >
        <div 
          className={style.modalContent}
          onClick={e => e.stopPropagation()} // コンテンツクリックでは閉じないように
        >
          わはー
        </div>
      </Modal.Simple>
    }
  </>);
};


const modalList = [
  {
    title: "Modal.Simple", 
    desc: <>
      <p>シンプルなダイアログ</p>
      <p>className とかの props はマスク部分にかかる</p>
      <p>サンプルはマスク部分クリックで閉じるようにしてる（onClick に指定）</p>
    </>,
    comp: <SimpleModalSample />,
    code: // {{{
      String.raw`const SimpleModalSample: React.FC<{}> = () => {

  const [open, setOpen] = useState(false); // trueでモーダルを表示

  return (<>
    <Button.Simple
      onClick={e => setOpen(true)}
    >
      <p>モーダルを表示</p>
    </Button.Simple>
    {open && 
      <Modal.Simple 
        onClick={e => setOpen(false)} // マスクをクリックしたときの挙動
      >
        <div 
          className={style.modalContent}
          onClick={e => e.stopPropagation()} // コンテンツクリックでは閉じないように
        >
          わはー
        </div>
      </Modal.Simple>
    }
  </>);
};
`, //` }}}
  },
];


export const Modals: React.FC<{}> = () => {

  const imp = String.raw`import { Modal } from "garakuta";`;

  return(
    <div className={style.wrapper}>
      <h1>モーダル</h1>
      <hr />
      <div className={style.desc}>
        <pre className="prettyprint lang-js linenums">{imp}</pre>
      </div>
      <Samples sampleList={modalList} lang="js" />
    </div>
  );
};

