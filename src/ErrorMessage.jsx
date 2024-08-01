import React from "react";

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occured: {error.toString()}</div>
);

ErrorMessage.propTypes = {
  error: Error,
};

export default ErrorMessage;
