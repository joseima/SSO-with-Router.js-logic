import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./auth";


const routes = [];
routes.push({
    to: '/',
    text: 'Home',  
    private: false,  
});
routes.push({
    to: '/blog',
    text: 'Blog',  
    private: false,  
});
routes.push({
    to: '/profile',
    text: 'Profile', 
    private: true,   
});
routes.push(
    {
        to: '/login',
        text: 'Login', 
        private: false,
        publicOnly:  true, 
    },
    {
        to: '/logout',
        text: 'Logout',
        private: true,    
    }
);



function Menu ()  {
    const auth = useAuth();

    return (
        <nav>
            <ul>
                {routes.map(route => {
                    if(route.publicOnly && auth.user) return null;
                    if (route.private && !auth.user) return null;
                    return (
                        <li key={route.to}>
                            <NavLink 
                                style={({isActive})=> ({
                                    color: isActive ? 'red' : 'blue'
                                })}
                                to={route.to}>
                                {route.text}
                            </NavLink>
                        </li>
                    )
                })

                }
                {/* <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="blog">Blog</Link>
                </li>
                <li>
                    <Link to="profile">Profile</Link>
                </li> */}
                {/* <li>
                    <NavLink 
                      //className={({isActive})=> ''}
                      style={({isActive})=> ({
                        color: isActive ? 'red' : 'blue'
                      })}
                      to="/"
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li> */}
             
            </ul>
        </nav>
    );
}


export {Menu};