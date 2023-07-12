import PropTypes from 'prop-types';

import notification from './Notification.module.css';

const Notifikation = ({ message }) => {
  return <p className={notification.notification}>{message}</p>;
};

export default Notifikation;

Notifikation.propTypes = {
  message: PropTypes.string.isRequired,
};
