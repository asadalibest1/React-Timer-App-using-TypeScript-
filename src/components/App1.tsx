import React from "react";
import Laib from "./laib";

const App = () => {

  const [books, setBooks] = React.useState([]);
  const [refresh, setRefresh] = React.useState(123);

  React.useEffect(() => {

      fetch("/api/books")
        .then(res => res.json())
        .then(data => {
          setBooks(data);
        });



  }, [refresh])

  return (
    <Laib books={books} setRefresh={setRefresh}/>
  )
};

export default App;
