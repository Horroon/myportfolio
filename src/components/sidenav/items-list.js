import React from 'react';
import {Link} from 'react-router-dom'
const LIST = [
    {
        name:"Home",
        path:"/",
        label:"Home",
        icon:'fa fa-home',
    },
    {
        name:"About",
        path:"/aboutme",
        label:"About",
        icon:'fa fa-users',
    },
    {
        name:"Contact",
        path:"/contactme",
        label:"Contact",
        icon:'fa fa-address-book',
    },
    {
        name:"Profile",
        path:'/myprofile',
        label:"Profile",
        icon: "fa fa-user-circle-o"
    },
    {
        name:"Gallery",
        path:'/gallery',
        label:"Gallery",
        icon: "fa fa-file-image-o"
    },
    
    {
        name:"Books",
        path:"/favoritebook",
        label:"Favorite Books",
        icon:'fa fa-book'
    },{
        name:"Movies",
        path:"/favoritemovies",
        label:"Favorite Movies",
        icon: 'fa fa-film'
    },{
        name:"Game",
        path:"/favoritegames",
        label:"Favorite Games",
        icon:'fa fa-gamepad'
    },
    {
        name:"Faq",
        path:"/faq",
        label:"Faq",
        icon:'fa fa-question-circle'
    },
]

function SideNavItems({}){
    return LIST.map(item=> <Link to={item.path}>
       <div> <i className={item.icon} /><a href="#">{item.label}</a></div>
    </Link>)
}

export default SideNavItems