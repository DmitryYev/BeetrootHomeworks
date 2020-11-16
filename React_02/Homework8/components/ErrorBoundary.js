import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h1 style={{textAlign: "center"}}>Что-то пошло не так.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;