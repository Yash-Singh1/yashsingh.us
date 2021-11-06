import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './Blog/Blog';
import Post from './Post/Post';
import Profile from './Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Profile />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route path='/blog/post/:post' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
