import React from 'react'

const App = () => {
    return (
        <div>
            <h1>Welcome to React application</h1>
            <h2>{`Active Env: ${process.env.NODE_ENV}`}</h2>
        </div>
    )
}

export default App
