import React, { useState, useRef, useContext } from "react";
import styles from "../../Styles/Login.module.css";
import AuthContext from "../../Store/AuthContext";

const Login = () => {
    const [isLoginToggle, setIsLoginToggle] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const authCtx = useContext(AuthContext);
    // const userIsLoggedIn = authCtx.isLoggedIn;

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();

    const toggleLoginHandler = () => {
        setIsLoginToggle((prevState) => !prevState);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (!isLoginToggle) {
            if (enteredPassword !== confirmPasswordInputRef.current.value) {
                setError("Password don't match");
                setTimeout(() => {
                    setError("");
                }, 5000);
                return;
            }
        }

        ////--> For Login API <---////
        setIsLoading(true);
        let firebaseUrl;
        const API_Key = "AIzaSyA3o-2nu5TZ2WNh_UJwblYyrIE_3ZbIjFQ";
        if (isLoginToggle) {
            firebaseUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_Key}`;
        }
        ////--> For Sign Up API <---////
        else {
            firebaseUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_Key}`;
        }

        try {
            const response = await fetch(firebaseUrl, {
                method: "POST",
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(
                    (data && data.error && data.error.message) ||
                        "Authentication Failed!"
                );
            }

            //////-------> Set Token when we get response <------ //////
            authCtx.Login(data.idToken, enteredEmail);

            isLoginToggle
                ? alert("You are successfully logged in")
                : alert("Welcome User!");
        } catch (error) {
            alert(error.message);
        }
        setIsLoading(false);
        passwordInputRef.current.value = "";
        !isLoginToggle && (confirmPasswordInputRef.current.value = "");
    };

    return (
        <div className={styles.card}>
            <form className={styles.formControl} onSubmit={submitHandler}>
                <div className={styles.fromTitle}>
                    <h2>{isLoginToggle ? "Login" : "Sign Up"}</h2>
                </div>
                <div className={styles.control}>
                    <label>Email</label>
                    <input
                        type="email"
                        ref={emailInputRef}
                        placeholder="Enter Your Email"
                    />
                </div>
                <div className={styles.control}>
                    <label>Password</label>
                    <input
                        type="password"
                        ref={passwordInputRef}
                        placeholder="Enter Your Password"
                    />
                </div>

                {!isLoginToggle && (
                    <div className={styles.control}>
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            ref={confirmPasswordInputRef}
                            placeholder="Confirm Your Password"
                        />
                        <p>{error}</p>
                    </div>
                )}

                <div className={styles.action}>
                    <button type="submit" className={styles.loginBtn}>
                        {isLoginToggle
                            ? isLoading
                                ? "Sending Request..."
                                : "Login"
                            : isLoading
                            ? "Sending Request..."
                            : "Create Account"}
                    </button>
                </div>
                {isLoginToggle && (
                    <div>
                        <p className={styles.forgetPassword}>Forget Password</p>
                    </div>
                )}
            </form>
            <div className={styles.toggleDiv}>
                <button
                    type="button"
                    className={styles.isLogginToggle}
                    onClick={toggleLoginHandler}
                >
                    {isLoginToggle
                        ? "Don't have an account? Sign Up"
                        : "Have an account? Login"}
                </button>
            </div>
        </div>
    );
};

export default Login;
