import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Screens
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";


// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    <Navbar></Navbar>

    <main className="py-10">
      <div className="container mx-auto max-w-7xl">

        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>

      </div>
    </main>
    </Router>
  );
}

export default App;