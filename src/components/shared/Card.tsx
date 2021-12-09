import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  reverse?: boolean;
};

const Card: FC<Props> = ({ children, reverse }) => {
  return <div className={`card${reverse ? ' reverse' : ''}`}>{children}</div>;
};

Card.defaultProps = {
  reverse: false,
};

export default Card;
