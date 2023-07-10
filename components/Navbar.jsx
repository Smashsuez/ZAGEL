import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";


const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNavActive = () => {
    setNavActive(!navActive);
  };

  return (
    <header>
      <nav className={`nav`}>
        <Link  legacyBehavior href={"/"} > 
          <Image src="/imgs/[removal.ai]_688263e9-0ee6-4409-9343-98d6d25337bc.png" alt="" width="100" height="100" style={{cursor:"pointer"}}/>
        </Link>
        <div onClick={toggleNavActive} className={`menu ${navActive ? "openmenu" : ""}`}>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
        <div className={`nav__menu-list ${navActive ? "active" : ""}`}>
          <div className="linkContainer">
            <div className="side">
              <div className="item">
                <p className="itemTitle">Email</p>
                ZAGEL@gmail.com
              </div>
              <div className="item">
                <p className="itemTitle">Address</p>
                building no., street, City
              </div>
              <div className="item">
                <p className="itemTitle">Phone</p>
                01234567890
              </div>
            </div>
            
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/"}>
                  <a>Home</a>
                </Link>
              </div>
            </div>
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/about"}>
                  <a>About</a>
                </Link>
              </div>
            </div>
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/Services"}>
                  <a>Services</a>
                </Link>
              </div>
            </div>
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/Clients"} >
                  <a>Clients</a>
                </Link>
              </div>
            </div>
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/Contact"}>
                  <a>Contact</a>
                </Link>
              </div>
            </div>
            <div className="switchContainer">
              <span className="btn btn-1">
                <input type="checkbox" name="" id="switch" />
                <label htmlFor="switch"></label>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
