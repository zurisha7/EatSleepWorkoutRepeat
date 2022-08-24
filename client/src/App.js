import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,

} from '@apollo/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Food from './components/Food';
import Sleep from './components/Sleep';
import Workout from './components/Workout';
import Signup from './components/Signup';
import NoMatch from './pages/NoMatch';
import Contact from './components/Contact';

const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div id="page-container">
          <div id="content-wrap">
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/login'
                element={<Login />}
              />

              <Route
                path='/food'
                element={<Food />}
              />
              <Route
                path='/sleep'
                element={<Sleep />}
              />
              <Route
                path='/workout'
                element={<Workout />}
              />
              <Route
                path='/contact'
                element={<Contact />}
              />
              <Route
                path='/signup'
                element={<Signup />}
              />
              <Route
                path='*'
                element={<NoMatch />}
              />

            </Routes>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
