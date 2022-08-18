import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,

} from '@apollo/client'; 

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './pages/Login';
import Eat from './components/Eat';
import Sleep from './components/Sleep';
import Workout from './components/Workout';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Contact from './components/Contact';

const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return{
    headers: { 
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
   <ApolloProvider client={client}>
    <BrowserRouter>
      <div>
        <Header />
        <Nav />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
            />
          <Route
            path='/login'
            element={<Login/>}
            />
          
          <Route
            path='/eat'
            element={<Eat/>}
            />
          <Route
            path='/sleep'
            element={<Sleep/>}
            />
          <Route
            path='/workout'
            element={<Workout/>}
            />
          <Route
            path='/Contact'
            element={<Contact/>}
            />
          <Route
            path='/Signup'
            element={<Signup/>}
            />
          <Route 
            path='*'
            element={<NoMatch />}
            />
        </Routes>
      </div>
      <Footer />
      </div>
    </BrowserRouter>
   </ApolloProvider>
  );
}

export default App;
