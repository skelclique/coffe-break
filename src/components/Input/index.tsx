import { InputHTMLAttributes } from 'react';

import './styles.scss';

type InputType = InputHTMLAttributes<HTMLInputElement>;

export function Input({
  ...rest
}: InputType) {
  return (
    <input
      className="inputContainer"
      {...rest}
    />
  );
}