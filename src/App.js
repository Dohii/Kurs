import './App.css';
import Home from './Views/Home-page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Users from './Views/Users-page/Users';
import Posts from './Views/Posts-page/Posts';
import ProfilePage from './Views/Profile-page/ProfilePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/user-profile' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
