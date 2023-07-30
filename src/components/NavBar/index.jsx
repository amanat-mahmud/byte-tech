import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const dropDownItems = 
    <ul className="p-2">
    <li><Link href="/">Processor</Link></li>
    <li><Link href="/">Motherboard</Link></li>
    <li><Link href="/">Ram</Link></li>
    <li><Link href="/">Power Supply</Link></li>
    <li><Link href="/">Storage Device</Link></li>
    <li><Link href="/">Monitor</Link></li>
    <li><Link href="/">Others</Link></li>
    </ul>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Contact Us</a></li>
        <li>
          <Link href="/">Categories</Link>
          {dropDownItems}
        </li>
        <li><a>About Us</a></li>
      </ul>
    </div>
    <Link href="/" className="btn btn-ghost normal-case text-xl">Byte Tech</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Contact Us</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Categories</summary>
          {dropDownItems}
        </details>
      </li>
      <li><a>About Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-accent">Pc Builder</a>
  </div>
</div>
    );
};

export default NavBar;