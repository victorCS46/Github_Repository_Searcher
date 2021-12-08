import React, { useRef, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

const App = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState({
    submit: false, 
    more: false
  });
  const page = useRef(6);
  
  const handleChange = (e) => setSearch(e.target.value);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading({...isLoading, submit: true});
    const response = await axios.get(`https://api.github.com/search/repositories`, {
      params: {
        q: search,
        per_page: page.current,
      }
    });
    if (page.current > 6) page.current = 6;
    setTimeout(() => {
      setIsLoading({...isLoading, submit: false});
      setItems(response.data.items);
      document.getElementById("load").style.display = "block";
    }, 1500);
  }

  const loadMore = async (e) => {
    e.preventDefault();
    setIsLoading({...isLoading, more: true});
    page.current = page.current + 6;
    if (page.current >= 60) {
      page.current = 60;
      document.getElementById("load").style.display = "none";
    }
    const response = await axios.get(`https://api.github.com/search/repositories`, {
      params: {
        q: search,
        per_page: page.current,
      }
    });
    setTimeout(() => {
      setIsLoading({...isLoading, more: false});
      setItems(response.data.items);
      window.scrollTo(0, document.body.scrollHeight);
    }, 1500);
  }

  return (
    <div className="App">
      <div>
        <div className="header">
          <img 
            id="react_icon" 
            src="logo192.png" 
            alt="React?" 
          /> 
          <h1>Github Repo Searcher</h1>
          <span>Search any repository from github here</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search Repository" 
          onChange={handleChange}
        />
        <button 
          style={search ? {} : {display:'none'}} 
          className="vcs-btn"
        >
          Search
        </button>
        <br />
        
        {/* Form loading Spinner Effect */}
        { (isLoading.submit) && <Spinner animation="border" /> }
      </form>
      { (items) && <Card items={items} /> }
      
      {/* Load more Spinner Effect */}
      { (isLoading.more) && <Spinner animation="border" /> }
      <button 
        className="vcs-btn" 
        id="load" 
        type="submit"
        style={{marginLeft: 'auto', marginRight: 'auto'}}
        onClick={loadMore}
      >
        Load More...
      </button>
    </div>
  );
}

export default App;
