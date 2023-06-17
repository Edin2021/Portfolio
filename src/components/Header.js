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

  const handleScroll = (e) => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    console.log('st', st);

    if (window.scrollY > headerHeight) {
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
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <Nav position="header-nav" />
        </div>
      </header>
    </>
  );
}

export default Header;
