import React from 'react';
import "./Main.css"
import Book from "../book/Book";

const Main = () => {
    return (
        <main className="main">
            <div className="booksSection">


                <div className="booksSection-controlBar">
                    <h2 className="controlBar_h2">
                        Found books  :)
                    </h2>
                </div>
                <div className="booksSection_contents">
                    <ul className="books_list">
                        <Book />
                        <Book />
                        <Book />
                        <Book />
                        <Book />
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Main;