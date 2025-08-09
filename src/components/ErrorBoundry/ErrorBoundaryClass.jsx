import React from "react";

class ErrorBoundryClass extends React.Component
{
    constructor(probs)
    {
        super(probs);
        this.state={hasError:false}
    }
    static getDerivedStateFromError(error)
    {
        return {hasError:true}
    }
    componentDidCatch(error,errorInfo)
    {
        console.log("Errors",error,errorInfo);
    }
    render()
    {
        if(this.state.hasError)
        {
            return <h2>There is an error </h2>
        }
        return this.props.children
    }
}

export default ErrorBoundryClass;