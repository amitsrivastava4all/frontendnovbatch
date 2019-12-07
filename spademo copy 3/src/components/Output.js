import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import {Home} from  './views/Home';
import {Contact} from  './views/Contact';
import {About} from  './views/About';
import {News} from  './views/News';
import {Login} from './views/Login';

export const Output = (props)=>{
    return (
        <div>
            <hr/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/news" component={News}/>
                <Route path="/about/:name/:job" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>
                <Redirect exact from="/contacts" to="/contact"/>
                <Route render={()=><h1>Wrong URL</h1>} />
            </Switch>
        </div>
    );
}