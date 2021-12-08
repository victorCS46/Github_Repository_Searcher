import React from 'react';
import { Link } from 'react-router-dom';

const Card = ( { items } ) => {
    
  return(
    <div className="div_container">
      {
        items.map(item =>(
          <div key={item.id}>
            <div className="div-card">
              <div className="div-img">
                <img 
                  className="vcs-img" 
                  alt="No img" 
                  src={item.owner.avatar_url}
                />
              </div>
              <div>
                <b>{item.full_name}</b>
              </div>
              <div>
                <span className="vcs-language">{item.language}</span>
              </div>
              <div className="vcs-description">{item.description}</div>
              <div>
                <span className="vcs-issues">Issues: {item.open_issues}</span>
                <span className="vcs-stars">Stars: {item.stargazers_count}</span>
              </div>
              <div className="vcs-repo">
                <Link 
                  to="/contributors" 
                  state={{
                    url: item.contributors_url
                  }} 
                  className="vcs-contributor"
                >
                  Top Contributors
                </Link>
                <a href={item.html_url} className="vcs-a">Go to repository</a>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Card;
