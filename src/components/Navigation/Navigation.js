import { Link } from 'react-router-dom';
import Logo  from '../Logo';
import './Navigation.scss';

const Navigation = () => (
    <div className="navigation">
      <Logo />
      <div className="navigation-links">
        <Link to="/About">About</Link> | <Link to="/Projects">Projects</Link> | <a target="_blank" rel="noreferrer" href="https://dev.to/valentinaperic">Blog</a> 
      </div>
    </div>
);

export default Navigation;