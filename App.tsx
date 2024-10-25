import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import StackNavigation from './src/navigation/StackNavigation';

const App: React.FC = () => (
    <Provider store={Store.Store}>
      <PersistGate persistor={Store.persist}>
        <NavigationContainer>
         <StackNavigation/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
);

export default App;
