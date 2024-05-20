import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/Authcontext";
import Signup from "./components/signup.jsx";
import Login from "./components/login.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* <Route exact path="/" element={<Home />} /> */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
