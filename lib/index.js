// ボタン
import * as basicButtons from "./buttons/basic";
export const Button = {
  Simple: basicButtons.Simple,
  Loading: basicButtons.Loading,
};

// フォーム
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

// フォーム
import * as basicModals from "./modals/basic";
export const Modal = {
  Simple: basicModals.Simple,
};

