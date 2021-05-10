import './App.css';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';
import { Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';

function App() {
  return (
          <div className="App">
              <Typography variant="h5">
                  <Link to="/App">
                    <HomeIcon style={{fontSize: 'x-large', verticalAlign:'top', color:'#000000'}}/>
                  </Link>
                  <h1 align="center">Releasing Soon...</h1>
              </Typography>

              <Header/>

              <Body/>
              <Footer/>
          </div>
  );
}

export default App;
