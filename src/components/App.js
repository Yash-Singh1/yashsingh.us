import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingWrapper from './LoadingWrapper';
import Code from './Post/Markdown_Components/Code';
import HeadingFactory from './Post/Markdown_Components/HeadingFactory';
const Blog = React.lazy(() => import('./Blog/Blog'));
const Post = React.lazy(() => import('./Post/Post'));
const Profile = React.lazy(() => import('./Profile/Profile'));
const TechCovid = React.lazy(() => import('./TechCovid/TechCovid'));
const NotFound = React.lazy(() => import('./NotFound/NotFound'));
const Contact = React.lazy(() => import('./Contact/Contact.mdx'));

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
          path='/contacts'
          element={
            <LoadingWrapper>
              <article className='markdown-body'>
                <Contact
                  components={{
                    code: Code,
                    h1: HeadingFactory(1),
                    h2: HeadingFactory(2),
                    h3: HeadingFactory(3)
                  }}
                />
              </article>
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
