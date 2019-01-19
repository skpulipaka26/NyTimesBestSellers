import React from 'react';

import { Redirect } from 'react-router-dom';

import '../css/book.css';

const Book = (props) => {
    const book = props.location.state;
    if (!book) {
        return <Redirect to="/books" />
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col align-end">
                    <button
                        onClick={() => props.history.goBack()}
                        className="btn shadow">Back</button>
                </div>
            </div>
            <div className="row">
            </div>
            <div className="row" style={{
                marginTop: '2rem'
            }}>
                <div className="col image-container">
                    <img
                        className="shadow"
                        src={book.book_image} alt={book.title}
                        width={book.book_image_width} height={book.book_image_height}
                        style={{
                            maxWidth: '100%'
                        }} />
                </div>
                <div className="col" style={{
                    padding: '1rem'
                }}>
                    <div>
                        <h3 className="book-title">{book.title}</h3>
                        <p>by <span className="book-author">
                            {book.author}
                        </span></p>
                    </div>
                    <p className="book-description">{book.description}</p>
                    <div>
                        <p className="book-purchase">Purchase</p>
                        {book.buy_links.map(link => {
                            return (
                                <button
                                    onClick={() => window.open(link.url, '_blank')}
                                    key={link.name}
                                    type="button"
                                    className="book-purchase-link btn btn-primary shadow">{link.name}
                                </button>
                            );
                        })}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Book;