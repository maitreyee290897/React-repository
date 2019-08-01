import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import UserDetails from './components/UserDetails';


//ReactDOM.render(<App />, document.getElementById('root'));



//later
const router = (
    <Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Main">Main</Link></li>
            <li><Link to="/About">About</Link></li>

        </ul>

        <ul>
            <li> <Route path="/" component={App} /></li>
            <li> <Route path="/Main" component={Main} /></li>
            <li> <Route path="/About" component={About} /></li>
            <li> <Route path="/UserDetais/:id" component={UserDetails} /></li>

        </ul>

    </Router>
    
    )
ReactDOM.render(
    router,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
