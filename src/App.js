import { Route, Switch } from 'react-router';
import './App.scss';
import { CreateBoard, Image,BoardContainer } from './components'



function App() {
  return (
    <div className="wrapper">
      <Image />
      <Switch>
        <Route exact path='/' component={CreateBoard} />
        <Route path = '/b/:id' component={BoardContainer} />
      </Switch>
    </div>
  );
}

export default App;
