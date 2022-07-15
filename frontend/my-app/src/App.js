import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (

    <Router>
          <div className="App">
 <Routes>
 <Route exact path='/' element={< LandingPage />}></Route>
                 <Route exact path='/signup' element={< SignUp />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/home' element={< Home />}></Route>
          </Routes>
    </div>

    </Router>

  );
}

export default App;
