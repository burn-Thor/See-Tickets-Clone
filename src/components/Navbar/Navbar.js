import React from "react";
import Logo from "./Gratzken.png"
import "./Navbar.css"


const Navbar = (img, button, form) => {
    return ( 
        <div className = "NavbarContainer">

            <div className = "Logo">
            <img src = {Logo} alt = "/"></img>
            </div>
            
            <div className = "btn">
            <button>Menu</button>
            </div>

            <div className = 'search'>
            <form>Search for your tickets</form>
            </div>

        </div>
     );
}
 
export default Navbar;