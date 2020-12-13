import React from 'react';
import './input.css';

interface Props {
  style: any;
  label: string;
  name: string;
  type: string;
  value?: number | string;
  defaultValue?: string;
  pattern?: string | any;
  onChange: (e: any) => void;
}

function Input({ style, ...props }: Props) {
  const { label, pattern, name } = props;

  return (
    <label htmlFor={name}>
      {label}
      <input pattern={pattern} className={style} {...props} />
    </label>
  );
}

Input.defaultProps = {
  style: 'Input',
  type: 'text',
};

export default Input;
