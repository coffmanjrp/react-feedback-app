import { FC } from 'react';
import { Card } from '.';

type Props = {
  id: number;
  rating: number;
  text: string;
};

const FeedbackItem: FC<Props> = ({ rating, text }) => {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
