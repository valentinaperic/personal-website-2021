import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// App Components
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About.js';


function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Navigation} />
        <Route path="/About" component={About} />
      </div>
    </Router>

  );
}

export default App;
