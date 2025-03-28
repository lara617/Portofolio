import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Certificacao from './components/Certificacao';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Portfolio} />
                <Route path="/certificacao" component={Certificacao} />
            </Switch>
        </Router>
    );
};

export default App;