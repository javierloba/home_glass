import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
import './Header.css';
import Navigation from "../Navigation/Navigation";
import Social from "../Social/Social";

const Header = () => {
  const [draweropen, setDraweropen] = useState(false);

  const handleDrawer = () => {
    setDraweropen(!draweropen);
  };

  return (
    <>
      <header>
        <a href="#" className="logo">
          LogoIpsum.
        </a>
        <div className={`${draweropen ? "closed" : "icon"}`}>
        <FontAwesomeIcon
          className="toggle"
          icon={draweropen ? faTimes : faBars}
          onClick={() => handleDrawer()}
        />
        </div>
      </header>
      <div className={`glass ${draweropen ? "full" : ""}`}></div>
      <div className={`${draweropen ? "content hide" : "content"}`}>
        <h2>¡Let it snow!</h2>
      </div>
      <Social draweropen={draweropen} />
      <Navigation draweropen={draweropen} />
    </>
  );
};

export default Header;
