"use client";

interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

const ErrorComponent = ({ error, reset }: ErrorComponentProps) => {
  return (
    <div>
      <h2>Error while loading</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default ErrorComponent;
