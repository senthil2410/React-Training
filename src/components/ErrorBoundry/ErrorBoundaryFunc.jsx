import React from "react";

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" style={{ color: "red" }}>
      <p>There is an error: {error.message}</p>
      <br />
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};
