import React from "react"
import App1 from "./components/App1"
import { makeServer } from "./server"

makeServer();

const App = () => {

  return (
    <div>
      <App1/>
    </div>
  )
};

export default App;
