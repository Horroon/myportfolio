import React from 'react';
import {Link} from 'react-router-dom'
const LIST = [
    {
        name:"Home",
        path:"/",
        label:"Home"
    },{
        name:"Book",
        path:"/favoritebook",
        label:"Favorite Book"
    },{
        name:"Movies",
        path:"/favoritemovies",
        label:"Favorite Movies"
    },{
        name:"Game",
        path:"/favoritegames",
        label:"Favorite Games"
    },
]

function SideNavItems({}){
    return LIST.map(item=> <Link to={item.path}>
       <div> <i className="fa fa-home" /><a href="#">{item.label}</a></div>
    </Link>)
}

export default SideNavItems