import {
  ChangeEvent,
  Dispatch,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import FeedbackContext from 'context/FeedbackContext';

type Props = {
  select: Dispatch<number>;
};

const RatingSelect: FC<Props> = ({ select }) => {
  const [selected, setSelected] = useState<number>(10);
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {[...new Array(10)].map((_, index) => {
        index += 1;

        return (
          <li key={index}>
            <input
              type="radio"
              id={`num${index}`}
              name="rating"
              value={index}
              onChange={handleChange}
              checked={selected === index}
            />
            <label htmlFor={`num${index}`}>{index}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default RatingSelect;
