import React from 'react';

// PUBLIC_INTERFACE
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // Logging or reporting service
    // eslint-disable-next-line
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div role="alert">
        <h2 style={{color: 'red'}}>Something went wrong.</h2>
        <pre>{String(this.state.error)}</pre>
      </div>
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
