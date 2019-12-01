import React from 'react';
import {NavLink} from 'react-router-dom';
export const Header = (props)=>{
    let myname = "Amit";
    let url = `/about/${myname}/Trainer`;
    return (
        <div>
             <NavLink to="/" activeClassName="active">Home</NavLink> &nbsp;
        <NavLink to={url} activeClassName="active">About</NavLink>&nbsp;
        <NavLink to="/contact?name=Ram" activeClassName="active">Contact</NavLink>&nbsp;
        <NavLink to="/news" activeClassName="active">News</NavLink>
        </div>
    )
}