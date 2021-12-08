import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './App';
import Contributors from './components/Contributors';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

const routing = (
  <BrowserRouter basename="/Github_Repository_Searcher">
    <div>
      <ul className="App-routing">
        <span>
          <Link className="vcs-route" to="/">Home</Link>
        </span>
      </ul>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contributors" element={<Contributors />} />
      </Routes>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
