import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oops! Blog Not Found</h2>
            <Link to='/'>Go Back To Home page</Link>
        </div>
     );
}
 
export default NotFound;