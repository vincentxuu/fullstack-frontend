import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Fullstack Application</Link>
          <Link className='btn btn-outline-dark' to="/adduser">Add User</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar