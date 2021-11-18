import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './Blog/Blog';
import Post from './Post/Post';
import Profile from './Profile/Profile';
import TechCovid from './TechCovid/TechCovid';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Profile />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route path='/blog/post/:post' element={<Post />} />
        <Route exact path='/infographic/tech-covid' element={<TechCovid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
