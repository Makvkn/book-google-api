import React from 'react';
import "./Book.css"

const Book = () => {
    return (
        <li>
            <div className="card_img-wrapper">
                <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg" alt=""/>
            </div>
            <div className="card_content">
                <p className="card_category">
                    History
                </p>
                <h3 className="card_name">
                    History about history
                </h3>
                <div className="card_info">
                    <p>Author</p>
                    <p>Year</p>
                </div>
            </div>
        </li>
    );
};

export default Book;