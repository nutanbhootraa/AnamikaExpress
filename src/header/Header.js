import './Header.css';
import header from './header_backup.jpeg';
import HomeIcon from '@material-ui/icons/Home';

function Header() {
  return (
      <div className="header" style={{backgroundImage: `url(${header})`}}>
          <div className="siteName">
              <b>Anamika Express</b>
              <div style={{float:'right', paddingRight:'2.5%'}}>
                <HomeIcon fontSize="large"/>
              </div>
          </div>
      </div>
  );
}

export default Header;
