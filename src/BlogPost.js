import React from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";
import { useAuth } from "./auth";

function BlogPost ()  {
    const navigate = useNavigate();
    const {slug} = useParams();
    const auth = useAuth();
    
    const blogpost = blogdata.find(post => post.slug === slug);

    const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;

    const returnToBlog = () => {
        navigate('/blog'); // ('-1') Navigate nos devuelve un lugar en el historial de navegación
    };
    return (
        <>
            <h2>{blogpost.title}</h2>
            <h5>Author: {blogpost.author}</h5>
            <p>{blogpost.content}</p>
            {canDelete && (
                <button>Delete this post</button>
            )}<p></p>
            <button onClick={returnToBlog}>Back to blog</button>
        </>
    );
}


export {BlogPost};