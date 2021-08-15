import React, { useContext } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import Chat from './screens/Chat'
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
      <Route exact path="/" component={Chat}/>
      <PrivateRoutes path='/chat' component={() => <h1>Voce esta logado</h1>}/>
    </Switch>
  </BrowserRouter>
)

export default Routes
