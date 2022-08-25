import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import App from './App.css';
import Layout from './Component/Layout';
import Doctor from './Container/Doctor/Doctor';
import Medicine from './Container/Medicine';
import { Provider } from 'react-redux/es/exports';
import Counter from './Counter/Counter';
import { confingstore } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react'
import PromisesExample from './Container/PromisesExample/PromisesExample';
import UsememoExample from './Container/UsememoExample';
import Usecallback from './Container/Usecallback';
import ThemeContext, { ThemeProdiver } from './context/ThemeContext';


function App(props) {
  const {store,persistor} = confingstore();
  return (
   <ThemeProdiver>
     <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout> 
        <Switch>
          <Route exact path={"/Medicine"} component={Medicine} />
          <Route exact path={"/Doctor"} component={Doctor} />
          <Route exact path={"/Counter"} component={Counter} />
          <Route exact path={"/PromisesExample"} component={PromisesExample} />
          <Route exact path={"/UsememoExample"} component={UsememoExample} />
          <Route exact path={"/Usecallback"} component={Usecallback} />
        </Switch>
      </Layout>
      </PersistGate>
    </Provider>    
   </ThemeProdiver>
  
  );
}
export default App;