import './App.css';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';
import { Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

function App() {
  return (
          <div className="App">
              <Typography variant="h5">
                  <HomeIcon style={{fontSize: 'x-large', verticalAlign:'top', color:'#000000'}}/>
                  <h1 align="center">Releasing Soon...</h1>
              </Typography>

              <Header/>

              <Body/>
              <Footer/>
          </div>
  );
}

export default App;
