import { FC, FormEvent, useContext, useEffect, useState } from 'react';
import FeedbackContext from 'context/FeedbackContext';
import { Button, Card, RatingSelect } from '.';

const FeedbackForm: FC = () => {
  const [text, setText] = useState<string>('');
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const [message, setMessage] = useState<string | null>('');
  const [rating, setRating] = useState<number>(10);
  const { feedbackEdit, addFeedback, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e: FormEvent) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters long');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, {
          text: newFeedback.text,
          rating: newFeedback.rating,
        });
      } else {
        addFeedback(newFeedback);
      }

      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating: number) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
