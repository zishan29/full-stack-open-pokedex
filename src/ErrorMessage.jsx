import React from "react";
import propTypes from "prop-types";

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occured: {error.toString()}</div>
);

ErrorMessage.propTypes = {
  error: propTypes.object.isRequired,
};

export default ErrorMessage;
