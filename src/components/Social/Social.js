import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Social.css';

const Social = ({ draweropen }) => {
  return (
    <div className={`${draweropen ? "social-Y" : "social"}`}>
    <ul className='social-icons'>
        <li>
        <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
        </a>
        </li>
        <li>
        <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        </li>
        <li>
        <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
        </a>
        </li>
    </ul>
  </div>
  );
};

export default Social;
