
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './Search';
class RouteComp extends Component {


    
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-inverse">
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                                        <Link to={'/'}  className="nav-link "  >Users</Link>
                        </li>
                        <li className="nav-item">
                                        <Link to={'/Repo'}  className="nav-link "  >Repo</Link>
                        </li>
                    </ul>
                   
                </div>
            </nav>
                        <Route exact path='/' component={() => <Search userorrepo='users'/>} />
                        <Route exact path='/Repo' component={() => <Search userorrepo='repositories'/>} />
                    </div>
                </Router>

            </div>
        )
    }

}

export default RouteComp;

