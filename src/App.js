import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { fetchBooks, fetchBooksSuccess } from './actions/books';

import './App.css';

class App extends Component {

  getList(list) {
    if (!list.length) {
      return null;
    }
    return list.map((l, i) => {
      return (
        <div key={i}>
          <h1>{l.list_name}</h1>
        </div>
      );
    });

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <button onClick={this.props.fetchBooks}>Fetch Books</button>
          {
            this.props.loading ? <p>loading...</p> : null
          }
          {this.getList(this.props.books)}
        </div>

      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ nyTimesBooks }) => ({
  books: nyTimesBooks.books,
  loading: nyTimesBooks.fetching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchBooks,
      fetchBooksSuccess
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
