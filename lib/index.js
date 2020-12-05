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
    Simple: textInputs.Simple,
    Labeled: textInputs.Labeled,
    Placeholder: textInputs.Placeholder,
  },
  Password: {
    Simple: passwordInputs.Simple,
    Labeled: passwordInputs.Labeled,
    Placeholder: passwordInputs.Placeholder,
  },
};

