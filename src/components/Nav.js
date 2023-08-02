import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

function Nav({ position }) {
  const [openMenu, setMenuOpen] = useState(false);
  const [currPage, setCurrPage] = useState("");
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    const currPath = window.location.href.split("/").pop();
    setCurrPage(currPath);
  }, []);

  const closeMenu = (e) => {
    const isLink = e.target.nodeName === "A";
    const isCloseBtn = e.target.classList.contains("close-menu-btn");
    if (isLink || isCloseBtn) {
      setMenuOpen(false);
      document.body.classList.remove('disable-scroll');
    }
  };

  const openMobileMenu = () => {
    setMenuOpen(!openMenu);
    document.body.classList.add('disable-scroll');
  };

  useEffect(() => {
    function handleResize() {
       if (window.innerWidth <= 992 && !mobileNav) {
        const nav = document.querySelector('.header-nav')
        const root = document.getElementById('root')
        root.appendChild(nav);
        setMobileNav(true)
       } else if (window.innerWidth > 992 && mobileNav) {
        const nav = document.querySelector('.header-nav')
        const header = document.querySelector('.header-center')
        header.appendChild(nav);
        setMobileNav(false)
       }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, [mobileNav]);


  return (
    <>
      <nav
        className={`${position} ${openMenu && "active"}`}
        onClick={closeMenu}
      >
        {position === "header-nav" && (
          <button type="button" className="close-menu-btn">
            <span className="icon">
              <IoIosClose />
            </span>
            <span className="visually-hidden">close menu button</span>
          </button>
        )}

        {currPage !== "projects" ? (
          <>
            <Link to="/">Home</Link>
            <a href="#projects">Projects</a>
            <a href="#technologies">Technologies</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </>
        ) : (
          <Link to="/">
            Back home
          </Link>
        )}
      </nav>
      {position && (
        <button className="menu-btn" type="button" onClick={openMobileMenu}>
          <HiMenuAlt3 />
          <span className="visually-hidden">Menu</span>
        </button>
      )}
    </>
  );
}

export default Nav;
