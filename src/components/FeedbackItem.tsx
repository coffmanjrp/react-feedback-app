import { FC } from 'react';

type Props = {
  id: number;
  rating: number;
  text: string;
};

const FeedbackItem: FC<Props> = ({ rating, text }) => {
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
};

export default FeedbackItem;
