import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
            <div class="row">
                <div class="col-4">
                       <NavLink  exact to="/" className = "navLinks" >Home</NavLink>
                </div>
                <div class="col-4">
                       <NavLink  className = "navLinks" to="/ShowCustomers"> List Of Customers</NavLink>
                </div>
                <div class="col-4">
                      <NavLink  className = "navLinks" to="/AddCustomers">Add Customers</NavLink>
                </div>
            </div>
    )
}


export default Navbar