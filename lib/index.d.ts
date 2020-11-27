import * as React from "react";
declare module "react" {
  // props に className? を取る React.FC の拡張型
  type FCX<P = {}> = FunctionComponent<P & { className?: string }>
};

export declare const Loader: {
  Spin: React.FCX<{}>;
}
