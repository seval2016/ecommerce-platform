import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';
import RegisterForm from './components/RegisterForm';

const App = () => (
   <Provider store={store}>
       <h1>User Authentication</h1>
       <LoginForm />
       <LogoutButton />
       <RegisterForm />
   </Provider>
);

export default App;
