import React from "react";

const AuthContext = React.createContext({
    Token: "",
    Email: "",
    Login: (token) => {},
    Logout: () => {},
    isLoggedIn: false,
});
export default AuthContext;
