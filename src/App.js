import './App.css';
import { Sitemap } from './common/sitemaps';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {Sitemap &&
            Sitemap.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
