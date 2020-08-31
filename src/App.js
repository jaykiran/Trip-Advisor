import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import TourList from './Components/TourList/index';

class App extends React.Component{
  render() {
    return(
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    );
  }
}

export default App;
