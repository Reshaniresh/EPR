import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
<<<<<<< HEAD
import Footer from './components/Layout/Footer';
=======
>>>>>>> 736c5dd32adfb4741e41eccecc01386114a4fb51

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
<<<<<<< HEAD
        <Route>
        <Footer />
        </Route>
=======
>>>>>>> 736c5dd32adfb4741e41eccecc01386114a4fb51
      </Switch>
    </Layout>
  );
}

export default App;
