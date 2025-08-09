import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorBoundaryFunc";

const ErrorChecking = ({ children }) => {
  const [reset, setReset] = useState(false);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setReset(prev => !prev)}
      resetKeys={[reset]}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorChecking;
