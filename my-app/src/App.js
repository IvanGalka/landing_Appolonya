import styled from './App.module.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <div className={styled.app}>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Layout />}/>
            <Route path='about' element={<About/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
