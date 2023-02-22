import React from "react";

export default function Main() {
    return (
        <main className="main-content-placeholder">
            <section className="s-facts">
                <div className="s-facts__inner row">
                    <h2 className="s-facts__title">Fun facts about React</h2>
                    <ul className="s-facts__list">
                        <li className="s-facts__list-item">Was first released in 2013</li>
                        <li className="s-facts__list-item">Was originally created by Jordan Walke</li>
                        <li className="s-facts__list-item">Has well over 100k stars on GitHub</li>
                        <li className="s-facts__list-item">Is maintained by Facebook</li>
                        <li className="s-facts__list-item">Powers thousands of enterprise apps, including mobile apps</li> 
                    </ul>
                </div>
            </section>
        </main>
    )
}