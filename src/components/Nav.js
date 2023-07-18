import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose, IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

function Nav({ position }) {
  const [openMenu, setMenuOpen] = useState(false);
  const [currPage, setCurrPage] = useState("");

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
            <a href="#selectedProjects">Projects</a>
            <a href="#technologies">Technologies</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </>
        ) : (
          <Link to="/">
            <span aria-hidden="true">
              <IoMdArrowRoundBack />
            </span>{" "}
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
