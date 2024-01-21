import React from "react";
import { useAuth } from "./auth";

function ProfilePage ()  {
    const auth = useAuth();

    return (
        <>
        <h1>My profile</h1>
        <h3>Welcome  {auth.user.username}</h3>
        </>
    );
}


export {ProfilePage};