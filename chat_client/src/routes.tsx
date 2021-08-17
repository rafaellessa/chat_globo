import React, { useContext } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import Chat from './screens/Chat'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
// import isAuthenticated from './services/Auth'

// const PrivateRoutes = ({ component: Component, ...rest }) => {
//   const { user } = useContext(AuthContext)
//   return (
//     <Route {...rest} render={props => (
//       user
//         ? (
//             <Component {...props}/>
//           )
//         : <Redirect to={{
//           pathname: '/',
//           state: {
//             from: props.location
//           }
//         }}/>
//     )}/>
//   )
// }

function PrivateRoute ({ children, ...rest }) {
  const { authenticated } = useContext(AuthContext)
  console.log('user ctx: ', authenticated)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated
          ? (
              children
            )
          : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
            )
      }
    />
  )
}

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login/>
      </Route>
      <Route exact path="/login" >
        <Login/>
      </Route>
      <Route exact path="/register" >
        <SignUp/>
      </Route>
      <PrivateRoute exact path='/chat'>
        <Chat/>
      </PrivateRoute>
    </Switch>
  </BrowserRouter>
)

export default Routes
