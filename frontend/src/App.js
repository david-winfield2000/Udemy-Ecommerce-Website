import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <main className='py-5'>
        <Container>
          <h1>Hello</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
