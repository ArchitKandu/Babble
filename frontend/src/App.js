import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Chats from './components/Chats'

function App() {
  return (
    <div className="App">
      <Route path='/' component={Home} exact/>
      <Route path='/chats' component={Chats}/>
    </div>
  );
}

export default App;
