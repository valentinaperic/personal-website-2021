import vcHeart from '../images/vcHeart.png';
import { Link } from 'react-router-dom';

const Logo = () => (
    <Link to="/"><img src={vcHeart} className="vc-logo" alt="Valentina Peric Text Logo" /></Link>
);

export default Logo;

