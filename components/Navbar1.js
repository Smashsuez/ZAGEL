import React,{Fragment, useState, useEffect} from "react";

const Navbar = () =>{
    const [showMenu, setshowMenu] = useState(false)
    const [transitionNavbar, setTransitionNavbar] = useState(false)
    
    const [navActive, setNavActive] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 100){
            setTransitionNavbar(true)
        }else{
            setTransitionNavbar(false)
        }
    }

    // window.addEventListener("scroll",changeBackground)
    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
      }, []);




      const toggleNavActive = () => {
        setNavActive(!navActive);
        setshowMenu(!showMenu)
      };


    return (
        <>
            <nav className={transitionNavbar ? "navbar active" : "navbar"}>
                <h1>ZAGEL<span>.</span></h1>
                <div className={showMenu ? "menu mobile-menu" : "menu" }>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Feq Question</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                    <div className="btn">
                        <a href="#"> Contact Us </a>
                    </div></div>
                {/* </div>
                onClick={toggleNavActive}  */}
                {/* <i className="fa fa-bars" aria-hidden="true" onClick={() => setshowMenu(!showMenu)}>X</i> */}
                <div  onClick={toggleNavActive} className={`Mmenu ${navActive ? "openmenu" : ""}`}>
                <span className="line-1"></span>
                <span className="line-2"></span>
                <span  className="line-3"></span>
             </div>
             
            </nav>
        </>
    )
}

export default Navbar