import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import {MainNavigator} from './navigators/MainNavigator.js';
import {setLocalNotification,clearLocalNotification} from './utils/api.js'
export default class App extends React.Component {
  componentDidMount() {
      setLocalNotification(Date.now()+5000,'minute');
      
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <MainNavigator/>
      </Provider>
    );
  }
}


