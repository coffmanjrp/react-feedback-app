import { FC, useState } from 'react';
import { FeedbackList, FeedbackStats, Header } from 'components';
import FeedbackData from 'data/FeedbackData';

const App: FC = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this feedback?'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList {...{ feedback, handleDelete }} />
      </div>
    </>
  );
};

export default App;
