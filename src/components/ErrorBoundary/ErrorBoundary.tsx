/* eslint-disable no-console */
import { Component, ErrorInfo, ReactNode } from 'react';
import { TrackJS } from 'trackjs';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        console.log(error);
        return { hasError: true };
    }

    static componentDidCatch(error: Error, info: ErrorInfo) {
        if (info && info.componentStack) {
            console.log(info.componentStack);
        }
        TrackJS?.track(error);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
