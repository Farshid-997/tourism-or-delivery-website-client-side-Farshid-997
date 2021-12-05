import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Location from './Components/Location/Location';
import Packages from './Components/Packages/Packages';

import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

import AddService from './Components/AddService/AddService';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ConfirmOrders from './Components/ConfirmOrders/ConfirmOrders';
import Offer from './Components/Offer/Offer';

import Places from './Components/Places/Places';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path='/'>
<Home></Home>
       </Route>

       <Route path="/home">
<Home></Home>
       </Route>

       <Route path="/location">
<Location></Location>
       </Route>

       <PrivateRoute path="/packages/:id">
<Packages></Packages>
       </PrivateRoute>


       <Route path="/blog">
<Blog></Blog>
       </Route>

       <Route path="/offer">
<Offer></Offer>
       </Route>

       <Route path="/Places">
<Places></Places>
       </Route>

       <Route path="/addservice">
<AddService></AddService>
</Route>


       <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

<PrivateRoute path="/confirmOrders">
<ConfirmOrders></ConfirmOrders>

</PrivateRoute>


<Route path="*">
<NotFound></NotFound>
</Route>
     </Switch>
     
     </BrowserRouter>
   </AuthProvider>
  
    </div>
  );
}

export default App;
