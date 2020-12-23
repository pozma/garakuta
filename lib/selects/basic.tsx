import * as React from "react";
import { useState } from "react";
import c from "./basic.scss";

export const Simple: React.FCU<{ 
  status?: JSX.Element;
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
}> = (props) => {
  const {id, className, children, status, onClick, ...other} = props;
  const [open, setOpen] = useState(false); // 候補リストの表示状態（true で表示）
  const icon = <p className={c.icon}>{open ? "▲" : "▼"}</p>; // 開閉アイコン

  return (
    <div className={`${c.simple} ${className}`} id={id}>
      <ul onClick={() => setOpen(!open)} {...other}>
        <li onClick={onClick}>{status}{icon}</li>
        {open && <li>
          <ul>
            {children}
          </ul>
        </li>}
      </ul>
    </div>
  );
};

