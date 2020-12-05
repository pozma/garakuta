import * as React from "react";
declare module "react" {
  // props に className? を取る React.FC の拡張型
  type FCX<P = {}> = FC<P & { className?: string }>
  // さらに拡張した props に onClick を取る型（ボタン用）
  type FCXB<P = {}> = FCX<P & { 
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }>
  // props に value, setValue を取る型（インプット用）
  type FCXI<P = {}> = FCX<P & { 
    value: string; // 入力値
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }>
};

type label = string | JSX.Element;


export declare const Button: {

  Simple: React.FCXB<{
    label: label;
  }>;

  Loading: React.FCXB<{
    labels: [label, label];
    isLoading: boolean;
    altClassName?: string;
  }>;

}


export declare const Input: {

  Text: {
    Simple: React.FCXI<{
      label: label;
    }>;

    Placeholder: React.FCXI<{
      label: label;
      placeholder: string;
      alert: label;
    }>;
  };

  Password: {
    Simple: React.FCXI<{
      label: label;
    }>;

    Placeholder: React.FCXI<{
      label: label;
      placeholder: string;
      alert: label;
    }>;
  };

}

