import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Switch } from "react-router-dom";
import UserPage from "../users/UserPage";



export const Home = () => {

    return (
        <React.Fragment>
            < Header />
            <main>
                <UserPage />
            </main>
            < Footer />
        </React.Fragment>
    );
};