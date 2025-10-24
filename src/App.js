import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header.jsx';
import Innovation from './components/Innovation.jsx';
import Welcome from './components/Welcome.jsx';
import LED from './components/LED.jsx';
import Preview from './components/Preview.jsx';
import Choose from './components/Choose.jsx';
import Light from './components/Light.jsx';
import Companies from './components/Companies.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <Innovation />
      <Welcome />
      <LED />
      <Preview />
      <Choose />
      <Light />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
