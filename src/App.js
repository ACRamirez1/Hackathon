import React, { useState, useEffect} from "react";
import './App.css';
import ListArticles from "./components/ListArticles";
import SearchBar from "./components/SearchBar";
import SelectToggle from "./components/SelectToggle";
// import ArticleCard from "./components/ArticleCard";
// import SearchForm from "./components/SearchForm";




function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
      .then(response => response.json())
      .then(data => setArticles(data.hits));
      

  },[])

  useEffect(() => {
    console.log('updated', articles);
  },[articles])


  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      backgroundColor:"black",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}

    className="App">
      <SearchBar />
      {/* <SelectToggle articles={articles} /> */}
      {/* <ArticleCard /> */}
      {/* <SearchForm /> */}
      {/* <ListArticles articles={articles} /> */}
    </div>
  );
}

export default App;
