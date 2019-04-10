import React from 'react';
import PropTypes from 'prop-types';

const message = props => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default message;
