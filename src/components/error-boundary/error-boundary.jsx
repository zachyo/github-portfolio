import { Component } from "react";

class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null, hasError: false };
  static getDerivedStateFromError(error) {
    // It will update the state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something unplanned for just occurred</h1>
          <p>{this.state.errorInfo}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
