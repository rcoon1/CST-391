import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target='#navbarNavAltMarkup' aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
            <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div class='navbar-nav'>
                    <span class='nav-item nav-link active' href='#'>
                        <Link to='/about'>About Us</Link>
                        <span class='sr-only'>(current)</span>
                    </span>
                    <span class='nav-item nav-link' href='#'>
                        <Link to='/contact'>Contact Us</Link>
                    </span>
                    <span class='nav-item nav-link' href='#'>
                        <Link to='/user/Ned Navigator'>User</Link>
                    </span>
                    <span class='nav-item nav-link' href='#'>
                        <Link to='/login'>Login</Link>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;