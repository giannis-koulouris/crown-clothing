import './App.css';
import {Switch,Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
