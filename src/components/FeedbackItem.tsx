import { Dispatch, FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Card } from '.';

type Props = {
  id: number;
  rating: number;
  text: string;
  handleDelete: Dispatch<number>;
};

const FeedbackItem: FC<Props> = ({ id, rating, text, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button type="button" className="close" onClick={() => handleDelete(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
