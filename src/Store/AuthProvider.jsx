import React, { useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
    const initialToken = localStorage.getItem("token");
    const initialEmail = localStorage.getItem("email");

    const [token, setToken] = useState(initialToken);
    const [userEmailId, setUserEmailID] = useState(initialEmail);

    const navigate = useNavigate();

    const userIsLoggedIn = !!token;

    const loginHandler = (token, email) => {
        setToken(token);
        localStorage.setItem("token", token);

        const userEmail = email.split(/[@.]+/).join("");
        setUserEmailID(userEmail);
        localStorage.setItem("email", userEmail);

        console.log("You have logged in suceesfully !!");
        navigate("/");

        setTimeout(() => {
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            navigate("/");
            console.log("Page is auto logout after 5min succesfull !!");
        }, 300000);
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/");
    };

    const authContextValue = {
        Token: token,
        userEmail: userEmailId,
        isLoggedIn: userIsLoggedIn,

        Login: loginHandler,
        Logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
