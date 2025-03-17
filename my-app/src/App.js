import styled from './App.module.css';
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div className={styled.app}>
      <Header />
      <main>
        <Layout />
      </main>
    </div>
  );
}

export default App;
