import React, { useContext } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import Chat from './screens/Chat'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
// import isAuthenticated from './services/Auth'

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext)
  return (
    <Route {...rest} render={props => (
      authenticated
        ? (
            <Component {...props}/>
          )
        : <Redirect to={{
          pathname: '/',
          state: {
            from: props.location
          }
        }}/>
    )}/>
  )
}

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={SignUp}/>
      <PrivateRoutes exact path='/chat' component={Chat}/>
    </Switch>
  </BrowserRouter>
)

export default Routes
