import './Header.css';
import header from './header.jpg';
import { GiPoliceBadge } from "react-icons/gi";

function Header() {
  return (
      <div className="header" style={{backgroundImage: `url(${header})`}}>
          <div className="siteName"><b>Anamika Express</b>
              <GiPoliceBadge />
          </div>

          <div className="author">
              <b>
                  Author : <br/>
                  "An Avid Reader<br/>
                  A Proud Memer<br/>
                  A Passionate Coder"<br/>
              </b>
          </div>
          <div className="quote">
              <b>You are what you do</b>
          </div>

      </div>
  );
}

export default Header;
