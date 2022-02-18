import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";
import logo from "../images/logos/logo.png";
import Nav from "./Nav";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { headerHeight, setHeaderHeight } = useGlobalContext();
  const header = useRef();

  useEffect(() => {
    setHeaderHeight(header.current.offsetHeight);
  }, []);

  let lastScrollTop = window.scrollY;

  const handleScroll = (e) => {
    let direction = "";
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      direction = "DOWN";
    } else {
      direction = "UP";
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

    if (window.scrollY > headerHeight && direction === "UP") {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header ref={header} className={isSticky ? "sticky" : null}>
        <div className="header-center">
          <img className="logo" src={logo} alt="logo" />
          <Nav position="header-nav" />
        </div>
      </header>
    </>
  );
}

export default Header;
