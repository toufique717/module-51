import React, { useContext } from 'react';
import Home from './componants/Home';
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from './provider/Authproviderrr';

const Navbar = () => {

   const { user ,logout } = useContext(Authcontext);

   const handlelogout = ()=>
   {
    logout()
    .then(()=>console.log('user logged ibn'))
    .catch(error => console.error(error))
   }

    const navlinks =  <>

    <li><NavLink to="/"> Home</NavLink></li>
     
    <li><NavLink to="/login">Login</NavLink></li>

    <li><NavLink to="/register">Register</NavLink></li>

    <li><NavLink to="/order">Order</NavLink></li>

    {
      user&&

       <>
       <li><NavLink to="/profile">Profile</NavLink></li>

       <li><NavLink to="/order-details">Order-Details</NavLink></li>
       </>

    }
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ?
        <>
        <span>{user.email}</span>
        <a onClick={handlelogout} className="btn">Sign-up</a>
        </>
        :

        <Link to="/login">

          <button className="btn"> login</button>
        
        </Link>
    }
     
  </div>
</div>
    );
};

export default Navbar;