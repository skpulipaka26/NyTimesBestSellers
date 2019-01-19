import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBooks } from './actions/books';

import Layout from './components/Layout';
import Books from './containers/Books';

import './App.css';
import Book from './components/Book';


class App extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Book} />
            <Redirect exact to="/books" />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ nyTimesBooks }) => {
  return {
    ...nyTimesBooks
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
)(App);
