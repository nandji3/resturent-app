import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import styles from "../Styles/RootLayout.module.css";

const RootLayouts = () => {
    return (
        <Fragment>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
        </Fragment>
    );
};

export default RootLayouts;
