import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/pages/Inicio';
import Eventos from './components/pages/Eventos';
import Convites from './components/pages/Convites';
import Perfil from './components/pages/Perfil';
import Ajuda from './components/pages/Ajuda';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import Sidebar from './components/SideBar';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      {isLoggedIn && <Navbar />}
      
      <Switch>
        <Route path='/login'>
          <Login onLogin={handleLogin} />
        </Route>
        <Route path='/cadastro'>
          <Cadastro />
        </Route>
        
        {isLoggedIn ? (
          <Sidebar>
            <Switch>
              <Route path='/' exact component={Inicio} />
              <Route path='/eventos' component={Eventos} />
              <Route path='/convite' component={Convites} />
              <Route path='/perfil' component={Perfil} />
              <Route path='/ajuda' component={Ajuda} />
            </Switch>
          </Sidebar>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
}

export default App;
