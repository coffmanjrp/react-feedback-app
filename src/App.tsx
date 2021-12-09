import { FC, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FeedbackForm, FeedbackList, FeedbackStats, Header } from 'components';
import AboutPage from 'pages/AboutPage';
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
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList {...{ feedback, handleDelete }} />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
