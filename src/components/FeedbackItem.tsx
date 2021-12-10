import { FC, useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import FeedbackContext from 'context/FeedbackContext';
import { Card } from '.';

type Props = {
  id: any;
  rating: number;
  text: string;
};

const FeedbackItem: FC<Props> = ({ id, rating, text }) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button
        type="button"
        className="close"
        onClick={() => deleteFeedback(id)}
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
