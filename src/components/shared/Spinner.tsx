import { FC } from 'react';
import spinner from 'components/assets/spinner.gif';

const Spinner: FC = () => {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{ display: 'block', margin: 'auto', width: '100px' }}
    />
  );
};

export default Spinner;
