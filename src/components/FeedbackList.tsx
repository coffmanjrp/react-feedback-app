import { Dispatch, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FeedbackItem } from '.';

type Props = {
  feedback: {
    id: any;
    rating: number;
    text: string;
  }[];
  handleDelete: Dispatch<number>;
};

const FeedbackList: FC<Props> = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem {...{ ...item, handleDelete }} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
