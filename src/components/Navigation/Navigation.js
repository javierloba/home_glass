import './Navigation.css';

const Navigation = ({ draweropen }) => {
  return (
    <div className={`${draweropen ? "navigation" : "hidden"}`}>
    <ul className='nav-list'>
        <li><a href='#' data-text="Home">Home</a></li>
        <li><a href='#' data-text="About">About</a></li>
        <li><a href='#' data-text="Services">Services</a></li>
        <li><a href='#' data-text="Team">Team</a></li>
        <li><a href='#' data-text="Contact">Contact</a></li>
    </ul>
  </div>
  );
};

export default Navigation;
