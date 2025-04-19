import React from 'react';

const withLoader = (WrappedComponent) => {
  return function withLoaderComponent({
    state: { isLoading, error, ...props },
  }) {
    if (isLoading) {
      return 'Loading...';
    }

    if (error) {
      return <p className="error">{error}</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
