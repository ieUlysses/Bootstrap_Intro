import React from "react"
import { Link, NavLink } from "react-router-dom"

function NavBar() {


    const links = [
        { name: "About", to: "/about" },
        { name: "Contact", to: "/contact" },
    ]


    /* TODO:
        -revisit next block
        -Add functionality for theme toggle    
    */


    /* Following block was an attempt to avod repeating nav link in conditional, if isactive == true return navLink with active class and if Notification, dont. Will revisit */
    /* const Active = (isActive) => {
        switch (isActive) {
            case isActive:
                return <h1>
                    hi
                </h1>;
            default:
                return <h1>
                    bi
                </h1>;
        }
    } */

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid d-flex justify-content-between">

                    <Link className="navbar-brand" to="/"> JC</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {links.map(link => (<li className="nav-item">
                                <NavLink to={link.to} className={({ isActive }) => isActive ? "text-info nav-link " : " nav-link"} >{link.name}</NavLink>
                            </li>))
                            }
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <Active /> */}

        </>
    )
}


export default NavBar