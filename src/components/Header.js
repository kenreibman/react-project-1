import React from "react";
import ReactLogo from "../logo.svg";

export default function Header() {
    return (
        <header className="main-header">
            <div className="main-header__inner row flex">
                <div className="main-header__logo flex">
                    <img src={ReactLogo} alt="React Logo" className="main-header__logo-img" />
                    <h1 className="main-header__logo-title">React Facts</h1>
                </div>
                <div className="main-header__aside">
                    <p className="main-header__aside-title">React Course - Project 1</p>
                </div>
            </div>

        </header>
    )
}