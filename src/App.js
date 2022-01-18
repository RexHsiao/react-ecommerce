import './App.css';
import HomePage from './pages/homepage';
import { Route } from 'react-router-dom';

const hatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/hats" component={hatsPage}/>
    </div>
  );
}

export default App;
