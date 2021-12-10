import { createContext, useState, ReactNode, Dispatch } from 'react';
import FeedbackData from 'data/FeedbackData';

type ContextProps = {
  feedback: {
    id: any;
    rating: number;
    text: string;
  }[];
  addFeedback: Dispatch<{
    id: any;
    rating: number;
    text: string;
  }>;
  deleteFeedback: Dispatch<any>;
};

const FeedbackContext = createContext({} as ContextProps);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback: {
    id: any;
    rating: number;
    text: string;
  }) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id: any) => {
    if (window.confirm('Are you sure you want to delete this feedback?'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
