import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { Header } from './Header';

const Contributors = () => {
  // This component is getting props from useLocation Hook
  const { state } = useLocation();
  const [contributors, setContributors] = useState([]);
  const [quantity, setQuantity] = useState(10);

  const loadMore = () => {
    setQuantity(quantity + 5);
    if (quantity >= 25) 
      document.getElementById("contributor_load").style.display = "none";
  }

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${state.url}`);
      setContributors(response.data);
    })();
  }, [state.url])

  return (
    <>
      <Header />
      <div>
      {
        contributors.slice(0, quantity).map((item) => (
          <div key={item.id} className="vcs-contributor-div">
            <div>
              <img className="vcs-con-img" src={item.avatar_url} alt="not found!!" />
            </div>
            <div className="vcs-con-name">
              <a href={item.html_url}>{item.login}</a>
            </div>
            <div className="vcs-con-name">({item.contributions} Contributions)</div>
          </div>
        ))
      }
      </div>
      <button 
        id="contributor_load" 
        className="vcs-btn" 
        style={{
          marginLeft: 'auto', 
          marginRight: 'auto',
        }}
        onClick={loadMore}
      >
        Load more
      </button>
    </>
  );
}
export default Contributors;