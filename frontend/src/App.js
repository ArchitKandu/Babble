import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Chats from "./Pages/Chats";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/chats" component={Chats} />
    </div>
  );
}

export default App;
