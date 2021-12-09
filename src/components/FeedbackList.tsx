import { FC } from 'react';
import { FeedbackItem } from '.';

type Props = {
  feedback: {
    id: number;
    rating: number;
    text: string;
  }[];
};

const FeedbackList: FC<Props> = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default FeedbackList;
