import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Blog from './Blog/Blog';
import Post from './Post/Post';
import Profile from './Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Profile} />
        <Route exact path='/blog' component={Blog} />
        <Route path='/blog/post/:post' component={Post} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
