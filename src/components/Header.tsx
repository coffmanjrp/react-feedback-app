import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  text?: string;
  bgColor?: string;
  textColor?: string;
};

const Header: FC<Props> = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <Link
          to="/"
          style={{ color: headerStyles.color, textDecoration: 'none' }}
        >
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Feadback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
};

export default Header;
