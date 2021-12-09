import { FC } from 'react';

type Props = {
  feedback: {
    id: number;
    rating: number;
    text: string;
  }[];
};

const FeedbackStats: FC<Props> = ({ feedback }) => {
  // calculate ratings average
  const average: number = +(
    feedback.reduce((acc: number, cur: { rating: number }): number => {
      return acc + cur.rating;
    }, 0) / feedback.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
