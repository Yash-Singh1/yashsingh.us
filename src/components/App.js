import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingWrapper from './LoadingWrapper';
const Blog = React.lazy(() => import('./Blog/Blog'));
const Post = React.lazy(() => import('./Post/Post'));
const Profile = React.lazy(() => import('./Profile/Profile'));
const TechCovid = React.lazy(() => import('./TechCovid/TechCovid'));
const NotFound = React.lazy(() => import('./NotFound/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <LoadingWrapper>
              <Profile />
            </LoadingWrapper>
          }
        />
        <Route
          exact
          path='/blog'
          element={
            <LoadingWrapper>
              <Blog />
            </LoadingWrapper>
          }
        />
        <Route
          path='/blog/post/:post'
          element={
            <LoadingWrapper>
              <Post />
            </LoadingWrapper>
          }
        />
        <Route
          exact
          path='/infographic/tech-covid'
          element={
            <LoadingWrapper className='infographic-tech-covid'>
              <TechCovid />
            </LoadingWrapper>
          }
        />
        <Route
          path='*'
          element={
            <LoadingWrapper>
              <NotFound />
            </LoadingWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
