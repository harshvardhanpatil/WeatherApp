import React from "react";
import { BrowserRouter as Router , Link , Route , Redirect , Switch , withRouter } from 'react-router-dom'
import Home from "./components/Home"
import CityWeather from './components/CityWeather'
import LocationWeather from './components/LocationWeather'
import Dashboard from './components/Dashboard'

const API_KEY = "30d7b5ed541660ae2d9b2d85ce89a704";

class App extends React.Component {
  
  render() {
    return (
      
      <div>
        <Router>
        <div className="wrapper">
          <div className="main">
            <Switch>
              <Route exact path="/" render={()=> <Redirect to={{pathname:'/Home'}}/>}></Route>
              <Route path="/Home" component={Home}></Route>
              <Route path="/CityWeather" component={CityWeather}></Route>
              <Route path="/LocationWeather" component={LocationWeather}></Route>
              <Route path="/Dashboard" component={Dashboard}></Route>
            </Switch>           
          </div>
        </div>
        </Router>
      </div>
      
    );
  }
};

export default App;