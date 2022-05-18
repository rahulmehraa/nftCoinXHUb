import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import './header.css';

function Header() {
    return (
        <React.Fragment>
            <header class="header">
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <Link click="closeToggle" class="navbar-brand" to="/"><img src="../assets/logo.png" alt=""
                                                                                   class="img-fluid"/></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                        <img src="../assets/images/icons/menu.png" alt="menu" class="img-fluid"/>
                    </span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item" click="closeToggle">
                                    <Link class="nav-link" to="">Discover</Link>
                                </li>
                                <li class="nav-item" click="closeToggle">
                                    <Link class="nav-link" to="">About Us</Link>
                                </li>

                                <li class="nav-item" click="closeToggle">
                                    <Link class="nav-link" to="">Artists</Link>
                                </li>

                                <li class="nav-item" click="closeToggle">
                                    <Link class="nav-link" to="/create">Create</Link>
                                </li>

                                <li class="nav-item" click="closeToggle">
                                    <button type="button" class="btn btn-primary">Explore More</button>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                {/*navbar*/}
            </header>
            {/*header*/}
        </React.Fragment>
    )
};
export default Header;

