import { Navigate, redirect, useNavigate } from "react-router-dom";

export const checkLoginStatusAPICalls = () => {

    console.log("hello")

    console.log(window.localStorage.getItem('jwtToken'));

    if(window.localStorage.getItem('jwtToken') == null) {

        return true;
    }

    return false;
}