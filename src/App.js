import './App.css';
import BlogPage from './compornents/BlogPage';
import Header from './compornents/Header';
import HomePage from './compornents/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter basename="/Portfolio">
        <div className="App">
        <Header />

          <Routes>
            <Route path="/" element={< HomePage /> } />
            <Route path="blog" element={< BlogPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
