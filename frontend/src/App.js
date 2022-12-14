import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';


import Home from './pages/Home';
import ProductScreen from './pages/ProductScreen';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-5'>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
