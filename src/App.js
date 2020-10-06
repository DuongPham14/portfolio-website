import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import SideDrawer from './components/navbar/SideDrawer';
import Backdrop from './components/navbar/Backdrop';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Router>
        <div className="App">
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/project" component={Project} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
