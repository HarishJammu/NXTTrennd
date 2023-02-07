import {BrowserRouter,Route,Switch} from "react-router-dom"
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Products from './components/Products'

import Cart from './components/Cart'
import Home from './components/Home'

const App=()=>(
  <BrowserRouter>
  <Switch>
  <Route exact path='/login' component={LoginForm}/>
    <ProtectedRoute exact path="/" component={Home}/>
    <ProtectedRoute exact path="/product" component={Products}/>
    <ProtectedRoute exact path="/cart" component={Cart}/>
    </Switch>
  </BrowserRouter>

)
export default App;