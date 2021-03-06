import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// App Components
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About.js';
import TypewriterContent from './components/TypewriterContent/TypewriterContent';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Navigation} />
        <Route exact path="/" component={TypewriterContent} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
      </div>
    </Router>

  );
}

export default App;
