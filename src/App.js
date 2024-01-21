import {HashRouter, Route, Routes} from 'react-router-dom';
import { Menu } from './Menu';
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { BlogPost } from './BlogPost';
import { ProfilePage } from './ProfilePage';
import { LoginPage } from './LoginPage';
import { LogoutPage } from "./LogoutPage";
import { AuthProvider, AuthRoute } from './auth';


function App() {
  return (
    <HashRouter>
      <AuthProvider>
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />}>
          <Route path=':slug' element={<BlogPost />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/logout' element={
          <AuthRoute>
            <LogoutPage />
          </AuthRoute>
        } />
        <Route path='/profile' element={
          <AuthRoute>
            <ProfilePage />
          </AuthRoute>
          } />
        <Route path='*' element={<h2>What you're looking for doesn't exist</h2>}/>
      </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
