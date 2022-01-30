import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Bills from './Pages/Bills.jsx';
import Login from './Pages/Auth/Login.jsx';
import BillDetails from "./Pages/BillDetails.jsx";
import Home from "./Pages/Home.jsx";

class App extends React.Component {

    render() {
        const cookies = new Cookies();

        if (typeof (cookies.get('access_token')) === 'undefined') {
            return (
                <Login/>
            )
        }

        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route path="/bills" exact component={Bills}/>
                        <Route path="/bills/:billID" component={BillDetails}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/" exact component={Bills}/>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;