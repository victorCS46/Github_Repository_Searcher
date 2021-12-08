import React from 'react';

export const Header = () => {
  return (
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
  )
}
