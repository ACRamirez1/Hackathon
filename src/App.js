import React, { useState, useEffect} from "react";
import './App.css';
import ListArticles from "./components/ListArticles";
import SearchForm from "./components/SearchForm";




function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
      .then(response => response.json())
      .then(data => setArticles(data.hits));
  },[])


  return (
    <div className="App">
      {/* <SearchForm /> */}
      <ListArticles articles={articles} />
    </div>
  );
}

export default App;
