import { Link } from 'react-router-dom';
import Logo  from '../Logo';
import './Navigation.scss';

const Navigation = () => (
    <div className="navigation">
      <Logo />
      <div className="navigation-links">
        <Link to="/About">About</Link> | <Link to="/Experience">Experience</Link> | <a target="_blank" href="https://medium.com/@valentinaperic">Blog</a> 
      </div>
    </div>
);

export default Navigation;