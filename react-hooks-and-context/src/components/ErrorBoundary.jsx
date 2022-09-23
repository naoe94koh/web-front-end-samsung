import React from 'react';
import { ErrorDisplay } from './ErrorDisplay';

export class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorDisplay>{this.state.error.message}</ErrorDisplay>;
    }

    return this.props.children;
  }
}
