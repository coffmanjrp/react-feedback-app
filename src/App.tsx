import { FC, useState } from 'react';
import { FeedbackList, Header } from 'components';
import FeedbackData from 'data/FeedbackData';

const App: FC = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};

export default App;
