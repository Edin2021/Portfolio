// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose, IoMdArrowRoundBack } from "react-icons/io";
import ResumeButton from "./ResumeButton";
import { Link } from "react-router-dom";

function Nav({ position }) {
  const [openMenu, setMenuOpen] = useState(false);
  const [currPage, setCurrPage] = useState("");

  useEffect(() => {
    const currPath = window.location.href.split("/").pop();
    setCurrPage(currPath);
  }, []);

  return (
    <>
      <nav className={`${position} ${openMenu && "active"}`}>
        {position === "header-nav" && (
          <button
            type="button"
            className="close-menu-btn"
            onClick={() => setMenuOpen(false)}
          >
            <IoMdClose />
            <span className="visually-hidden">close menu button</span>
          </button>
        )}

        {currPage !== "projects" ? (
          <>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <a href="#selectedProjects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </>
        ) : (
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <span aria-hidden="true">
              <IoMdArrowRoundBack />
            </span>{" "}
            Back home
          </Link>
        )}

        <ResumeButton position="inside" />
      </nav>
      {position && (
        <button
          className="menu-btn"
          type="button"
          onClick={() => setMenuOpen(!openMenu)}
        >
          <TiThMenu />
          <span className="visually-hidden">Menu</span>
        </button>
      )}
    </>
  );
}

export default Nav;
