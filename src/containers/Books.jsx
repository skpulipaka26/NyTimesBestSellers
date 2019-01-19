import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBooks } from '../actions/books';


import '../css/books.css';

class Books extends Component {

    render() {
        return (
            <div className="container">
                {this.props.loading ? (
                    <div className="loading">
                        loading...
                    </div>) : null}
                {this.props.error ? (<div>
                    <div className="loading">
                        <div>
                            an error has occured, please try again
                       </div>
                        <div>
                            <button
                                onClick={() => this.props.fetchBooks()}
                                className="btn">Refresh</button>
                        </div>
                    </div>
                </div>) : null}
                <div className="row">
                    <div className="col align-end">
                        <button
                            onClick={() => this.props.fetchBooks()}
                            className="btn shadow">Refresh</button>
                    </div>
                </div>
                {this.props.bestSellers.lists.map((category, index) => {
                    return (
                        <div className="books-container" key={index}>
                            <div className="row">
                                <div className="col">
                                    <p className="category">{category.display_name || 'Unknown'}</p>
                                </div>
                            </div>
                            <div className="row">
                                {category.books.map((book, i) => {
                                    return (
                                        <div className="col books" key={i}>                                
                                            <Link to={{ pathname: `/books/${book.title}`, state: {...book, category: category} }}>
                                                <img className="book-image shadow" src={book.book_image} alt={book.author} width="50%"
                                                    style={{ borderRadius: '5px', marginLeft: '5px' }} />
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}

            </div>
        );
    }

}

const mapStateToProps = ({ nyTimesBooks }) => {
    return {
        bestSellers: nyTimesBooks.bestSellers,
        loading: nyTimesBooks.fetching,
        metadata: nyTimesBooks.metadata,
        error: nyTimesBooks.error
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchBooks
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Books);