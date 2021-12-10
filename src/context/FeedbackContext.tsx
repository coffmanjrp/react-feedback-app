import { createContext, Dispatch, useState, ReactNode } from 'react';
import FeedbackData from 'data/FeedbackData';

type FeedbackProps = {
  id: any;
  rating: number;
  text: string;
};

type UpdateFeedback = (
  id: any,
  updItem: { text: string; rating: number }
) => void;

type ContextProps = {
  feedback: FeedbackProps[];
  feedbackEdit: { item: FeedbackProps; edit: boolean };
  addFeedback: Dispatch<FeedbackProps>;
  deleteFeedback: Dispatch<any>;
  editFeedback: Dispatch<FeedbackProps>;
  updateFeedback: UpdateFeedback;
};

const FeedbackContext = createContext({} as ContextProps);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: { id: null, rating: 0, text: '' },
    edit: false,
  });

  const addFeedback = (newFeedback: FeedbackProps) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id: any) => {
    if (window.confirm('Are you sure you want to delete this feedback?'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  // set item to be updated
  const editFeedback = ({ id, rating, text }: FeedbackProps) => {
    setFeedbackEdit({
      item: { id, rating, text },
      edit: true,
    });
  };

  // update feedback item
  const updateFeedback: UpdateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
