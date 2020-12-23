// ボタン
import * as basicButtons from "./buttons/basic";
export const Button = {
  Simple: basicButtons.Simple,
  Loading: basicButtons.Loading,
};

// 一行入力欄
import * as textInputs from "./inputs/text";
import * as passwordInputs from "./inputs/password";
export const Input = {
  Text: {
    Box: textInputs.Box,
    Underline: textInputs.Underline,
  },
  Password: {
    Box: passwordInputs.Box,
    Underline: passwordInputs.Underline,
  },
};

// 複数行入力欄
import * as basicTextareas from "./textareas/basic";
export const Textarea = {
  Expand: basicTextareas.Expand,
};

// セレクタ
import * as basicSelects from "./selects/basic";
export const Select = {
  Simple: basicSelects.Simple,
};

// モーダル
import * as basicModals from "./modals/basic";
export const Modal = {
  Simple: basicModals.Simple,
};

