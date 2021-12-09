import { FC } from 'react';

type Props = {
  text?: string;
};

const Header: FC<Props> = ({ text }) => {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Feadback UI',
};

export default Header;
