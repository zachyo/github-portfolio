import { Link } from "react-router-dom";
import './navbar.scss'

const Navbar = () => {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/repos">Repositories</Link>
      </div>
    );
}
 
export default Navbar;