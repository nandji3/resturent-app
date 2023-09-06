import React, { useContext, useState } from "react";
import styles from "../../Styles/Header.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../Store/AuthContext";

const Header = () => {
    const [showNavbarLinks, setShowNavbarLinks] = useState(false);

    const authCtx = useContext(AuthContext);
    const userIsLoggedIn = authCtx.isLoggedIn;
    const navigate = useNavigate();

    const logoutHandler = () => {
        authCtx.Logout();
        navigate("/");
    };

    return (
        <nav className={styles.navbar} id="nav">
            <div className={styles.resturentLogo}>
                <Link to="/">
                    <span>Restaurant Leading Page</span>
                </Link>
            </div>
            <div
                className={`${styles.navLink} ${
                    showNavbarLinks ? styles.mobileNavbarLink : ""
                }`}
                id="mobileNavbarLink"
            >
                <ul className={styles.containerNavLink}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="landing">Landing</NavLink>
                    </li>
                    <li>
                        <NavLink to="gallery">Gallery</NavLink>
                    </li>
                    {userIsLoggedIn && (
                        <li>
                            <NavLink to="shop">Shop</NavLink>
                        </li>
                    )}
                    <li>
                        <NavLink to="blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="team">Team</NavLink>
                    </li>
                    <li>
                        <NavLink to="contact">Contact</NavLink>
                    </li>
                    {!userIsLoggedIn ? (
                        <li>
                            <NavLink to="login">Login</NavLink>
                        </li>
                    ) : (
                        <li className={styles.logoutBtnDiv}>
                            <button
                                className={styles.logoutBtn}
                                onClick={logoutHandler}
                            >
                                Logout
                            </button>
                        </li>
                    )}
                    <li>
                        <NavLink to="cart">
                            <i
                                className="fa-solid fa-cart-shopping fa-lg"
                                id="cartIcon"
                            ></i>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.hamburgetMenu}>
                <i
                    className={
                        showNavbarLinks
                            ? "fa-solid fa-times fa-xl"
                            : "fa-solid fa-bars fa-xl"
                    }
                    onClick={() => setShowNavbarLinks(!showNavbarLinks)}
                ></i>
            </div>
        </nav>
    );
};

export default Header;
