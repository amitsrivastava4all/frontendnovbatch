import React from 'react';
import {Sports} from './Sports';
import {Route, NavLink} from 'react-router-dom';
export const News = ()=>{
    return (<div><h1>I am News </h1>
    <NavLink to="/news/politics" activeClassName="active">Politics</NavLink>
    &nbsp;
    <NavLink to="/news/sports" activeClassName="active">Sports</NavLink>
    <hr/>
         <Route path="/news/politics" exact render={()=><h1>politics news</h1>}/>
          <Route path="/news/sports" exact component={Sports}/>
    </div>)
}