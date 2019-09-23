import React from 'react';
import { Provider } from 'react-redux';
import store from './Storage';
import UserCRUD from './Components/UserCRUD';
import Navbar from './Components/Navbar/Navbar'

class App extends React.Component {
  render() {
    return (
     <Provider store={store}>
      <Navbar/>
      <UserCRUD/>
      </Provider>
    );
  }
}

export default App;