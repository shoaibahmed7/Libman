import "../styles/navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="nav">
            <div className="log">
              {/* <h1 style={{color:"gold"}}>Logo</h1> */}
              <img height="50px" style={{margin:"15px"}} src="/images/vadi" alt="" />
            </div>
            <div className="links">
                 <ul>
                    <li><Link style={{color:"gold", textDecoration:"none"}} to="/ad">Home</Link></li>
                    <li><Link style={{color:"gold", textDecoration:"none"}} to="/book-list">BookList</Link></li>
                    <li><Link style={{color:"gold", textDecoration:"none"}} to="/add-list">UserList</Link></li>
                    <li><Link style={{color:"gold", textDecoration:"none"}} to="/add-book">AddBook</Link></li>
                    <li><Link style={{color:"gold", textDecoration:"none"}} to="/add-users">AddUser</Link></li>
                    <li><Link style={{color:"gold", textDecoration:"none",border:"1px solid gold",padding:"5px 3px"}} to="/">Logout</Link></li>
                 </ul>
            </div>
        </div>
     );
}
 
export default Navbar;