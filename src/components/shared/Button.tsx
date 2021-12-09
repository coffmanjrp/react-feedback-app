import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  version?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset' | undefined;
  isDisabled?: boolean;
};

const Button: FC<Props> = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

export default Button;
