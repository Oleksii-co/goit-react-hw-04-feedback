import PropTypes from 'prop-types';

import feedback from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={feedback.feedbackList}>
      {options.map(btn => {
        return (
          <li key={btn}>
            <button
              name={btn}
              onClick={onLeaveFeedback}
              className={feedback.feedbackButton}
            >
              {btn}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
