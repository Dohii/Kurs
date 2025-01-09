import Home from '../Views/Home-page/Home';
import Users from '../Views/Users-page/Users';
import Posts from '../Views/Posts-page/Posts';

export const Sitemap = [
  { path: '/', element: <Home /> },
  { path: '/users', element: <Users /> },
  { path: '/posts', element: <Posts /> },
];
