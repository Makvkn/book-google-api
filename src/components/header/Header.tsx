import React from 'react';
import "./Header.css"

const Header = () => {
    const handlerSubmit = async (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        console.log('hello search')
        {/*AIzaSyA4qW0u6wL-JSXsc5654TWfnW-wYgDPelY*/}

        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=+intitle:g&startIndex=0&maxResults=30&key=AIzaSyA4qW0u6wL-JSXsc5654TWfnW-wYgDPelY');
        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData)
        }

        // "https://www.googleapis.com/books/v1/volumes?q=+intitle:g&startIndex=0&maxResults=30&key=AIzaSyBNyDVH2q0vYAyz4zBazhe1_P5iLDa1ScU"

    }


    return (
        <div className="header_container">
            <h1 className="header_title">Google books</h1>
            <form action="" className="header_form">

                <section className="form_section">
                    <label htmlFor="" className="form_label">Search book</label>
                    <input className="form_input" type="text" placeholder="Search"/>
                </section>

                <section className="form_section">
                    <label htmlFor="" className="form_label">Select category</label>
                    <div className="drop_down">
                        <p className="dropDown_title"></p>
                        <ul className="dropDown_options">

                        </ul>
                    </div>
                </section>

                <button onClick={handlerSubmit} className="form_submit">
                    Search
                </button>

            </form>
        </div>
    );
};

export default Header;