import * as React from "react";
declare module "react" {
  // props に className? を取る React.FC の拡張型
  type FCX<P = {}> = FC<P & { className?: string }>
  // for <Button>
  type FCB<P = {}> = FC<P & React.ButtonHTMLAttributes<HTMLButtonElement>>
  // for <input>
  type FCI<P = {}> = FC<P & React.InputHTMLAttributes<HTMLInputElement>>
  // for <div>
  type FCD<P = {}> = FC<P & React.HTMLAttributes<HTMLDivElement>>
};

type label = string | JSX.Element;


export declare const Button: {

  Simple: React.FCB<{}>;
  Loading: React.FCB<{
    isLoading: boolean;
    altClassName?: string;
  }>;

}


export declare const Input: {

  Text: {
    Box: React.FCI<{id?:string;}>;
    Underline: React.FCI<{}>;
  };

  Password: {
    Box: React.FCI<{}>;
    Underline: React.FCI<{}>;
  };

}

export declare const Modal: {

  Simple: React.FCD<{}>;

}


