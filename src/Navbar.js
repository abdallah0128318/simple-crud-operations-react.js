import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>dojo Blog</h1>
            <div className="links">
                <Link to="/">home</Link> 
                <Link to="/create" id="newBlog">New blog</Link>
            </div>
        </nav>
    );
};
 
export default Navbar;