import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
//components
import App from './pages/Home'



import FaQ from './pages/FaQ';



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/FaQ" exact component={FaQ} />




            </Switch>
        </BrowserRouter>
    );
};


export default Routes;