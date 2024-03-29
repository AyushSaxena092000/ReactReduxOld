import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import IceCreamContainer from './components/iceCreamContainer'
import CakeContainer from './components/cakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import NewCakeContainer from './components/NewCakeContainer'
import UserContainer from './components/UserContainer'


function App () {
  return (
    <Provider store={store}>
      <div className='App'>
      <CakeContainer/>
      <IceCreamContainer/>
      <HooksCakeContainer/>
      <NewCakeContainer/>
      <UserContainer/>
      </div>
    </Provider>
  )
}

export default App