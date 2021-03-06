import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
