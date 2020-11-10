import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// My imports
import allNotes from './components/allNotes/allNotes';

ReactDOM.render(
  <React.StrictMode>   
    <Router>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          {/* Title of navbar */}
          <Link className="navbar-brand" to="/">Notas</Link>
          {/* Options */}
          <div className="nav-items">
            <Link to="/" className="text-white">Inicio</Link>
            <Link to="/about" className="ml-3 text-white">Acerca De</Link>
          </div>

        </div>
      </nav>
      <Switch>
        <div className="container">
          <Route exact path="/">
            <allNotes/>
          </Route>
          <Route exact path="/about">
            Crear tarjeta
          </Route>
        </div>
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
