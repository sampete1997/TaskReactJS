import "./App.css";
import LoginScreen from "./components/SignInPanel";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import ContextFetchdData from "./components/ContextFetchedData";

function App() {
  console.log('hi App')
  return (
    <div className="App">
<ContextFetchdData>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
</ContextFetchdData>
    </div>
  );
}

export default App;
