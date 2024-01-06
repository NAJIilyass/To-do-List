import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

//Pages & Components
import Home from './pages/Home'
//import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext()
  
  return (
    <div className="bg-blue-950 min-h-screen font-mono min-w-fit">
      <BrowserRouter>
        {/* <Navbar/> */}
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
        <footer className="text-transparent">.</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
