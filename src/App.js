import './App.css';
import LoginScreen from './components/SignInPanel';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
