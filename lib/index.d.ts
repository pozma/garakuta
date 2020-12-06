import * as React from "react";
declare module "react" {
  // props に className? を取る React.FC の拡張型
  type FCX<P = {}> = FC<P & { className?: string }>
  // for <Button>
  type FCXB<P = {}> = FCX<P & React.ButtonHTMLAttributes<HTMLButtonElement>>
  // for <input>
  type FCXI<P = {}> = FCX<P & React.InputHTMLAttributes<HTMLInputElement>>
};

type label = string | JSX.Element;


export declare const Button: {

  Simple: React.FCXB<{}>;
  Loading: React.FCXB<{
    isLoading: boolean;
    altClassName?: string;
  }>;

}


export declare const Input: {

  Text: {
    Box: React.FCXI<{}>;
    Underline: React.FCXI<{}>;
  };

  Password: {
    Box: React.FCXI<{}>;
    Underline: React.FCXI<{}>;
  };

}

