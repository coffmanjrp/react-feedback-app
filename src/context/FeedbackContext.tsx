import { createContext, Dispatch, useEffect, useState, ReactNode } from 'react';

type FeedbackProps = {
  id: any;
  rating: number;
  text: string;
};

type FeedbackEditProps = { item: FeedbackProps; edit: boolean };

type AddFeedbackProps = (newFeedback: { rating: number; text: string }) => void;

type UpdateFeedback = (
  id: any,
  updItem: { text: string; rating: number }
) => void;

type ContextProps = {
  feedback: FeedbackProps[];
  feedbackEdit: FeedbackEditProps;
  isLoading: boolean;
  addFeedback: AddFeedbackProps;
  deleteFeedback: Dispatch<any>;
  editFeedback: Dispatch<FeedbackProps>;
  updateFeedback: UpdateFeedback;
};

const FeedbackContext = createContext({} as ContextProps);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [feedback, setFeedback] = useState<FeedbackProps[]>([]);
  const [feedbackEdit, setFeedbackEdit] = useState<FeedbackEditProps>({
    item: { id: null, rating: 0, text: '' },
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  const addFeedback: AddFeedbackProps = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  const deleteFeedback = async (id: any) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // set item to be updated
  const editFeedback = ({ id, rating, text }: FeedbackProps) => {
    setFeedbackEdit({
      item: { id, rating, text },
      edit: true,
    });
  };

  // update feedback item
  const updateFeedback: UpdateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
    setFeedbackEdit({ ...feedbackEdit, edit: false });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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
