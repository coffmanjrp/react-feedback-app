import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FeedbackForm, FeedbackList, FeedbackStats, Header } from 'components';
import FeedbackData from 'data/FeedbackData';

const App: FC = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this feedback?'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback: {
    id: any;
    rating: number;
    text: string;
  }) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList {...{ feedback, handleDelete }} />
      </div>
    </>
  );
};

export default App;
