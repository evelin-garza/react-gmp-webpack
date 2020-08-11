import React from "react";

const ErrorBoundary = (props) => {
    const ErrorMessage = (
        <h2 className="error-message">There was an error while loading movies, please try again.</h2>
    );

    return <>{props.hasErrors ? ErrorMessage : props.children}</>
};

export default ErrorBoundary;