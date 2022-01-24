import React from "react"
import { Link } from "react-router-dom"


function App() {
  return (
    <>

      <div>
        <h1>Testing</h1>
        <nav>
          <Link to="/testone">Test One</Link>
          <Link to="/testtwo"> TestTwo</Link>
        </nav>
      </div>

    </>
  );
}

export default App;
