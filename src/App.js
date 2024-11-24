import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './components/ThemeProvider';
import AppContent from './components/AppContent';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá!
        </p>
      </header>

      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </div>
  );
}

export default App;
